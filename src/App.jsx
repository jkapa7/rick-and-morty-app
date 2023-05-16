import styles from "./styles/App.module.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About";
import Detail from "./views/Detail";
import Form from "./views/Form";
import Favorites from "./views/Favorites";

import axios from "axios";

function App() {
  const [access, setAccess] = useState(false);
  const username = "juan@gmail.com";
  const password = "@Soyjuan";
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
      alert("Bienvenido");
    } else {
      alert("Username o password incorrectos");
    }
  }

  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [navigate, access]);

  const location = useLocation();
  // console.log("Location ------->", location);
  const [characters, setCharacters] = useState([]);

  //

  async function onSearch(id) {
    try {
      const result = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const character = result.data;

      if (character.name) {
        let exist = characters.find((e) => e.id === character.id);
        if (exist) {
          alert("Ese personaje ya existe");
        } else {
          setCharacters((oldChars) => [...oldChars, character]);
        }
      } else {
        window.alert("No hay personajes con ese ID");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function onClose(id) {
    setCharacters((data) => {
      return data.filter((e) => e.id !== id);
    });
  }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        {location.pathname !== "/" && (
          <NavBar logout={logout} onSearch={onSearch} />
        )}

        <Routes>
          <Route path="/" element={<Form login={login} />}></Route>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />}></Route>

          <Route
            path="/favorites"
            element={<Favorites characters={characters} onClose={onClose} />}
          ></Route>
          <Route path="/detail/:detailId" element={<Detail />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
