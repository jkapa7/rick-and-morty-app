// import styles from "../styles/App.module.css";
// import { useState } from "react";
// import Cards from "./Cards.jsx";
// import NavBar from "./NavBar";
// import { Route, Routes } from "react-router-dom";
// import About from "../views/About";
// import Detail from "../views/Detail";
// import Home from "../views/Home";
// import Favorites from "../views/Favorites";

// function App() {
//   const [characters, setCharacters] = useState([]);

//   function onClose(id) {
//     setCharacters((data) => {
//       return data.filter((e) => e.id !== id);
//     });
//   }

//   return (
//     <div className={styles.app}>
//       <div className={styles.container}>
//         {location.pathname !== "/" && <NavBar />}

//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route
//             path="/home"
//             element={<Cards characters={characters} onClose={onClose} />}
//           />
//           <Route path="/about" element={<About />}></Route>

//           <Route
//             path="/favorites"
//             element={<Favorites characters={characters} onClose={onClose} />}
//           ></Route>
//           <Route path="/detail/:detailId" element={<Detail />}></Route>
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;
