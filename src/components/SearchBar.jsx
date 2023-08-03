import { useState } from "react";
import axios from "axios";
import styles from "../styles/SearchBar.module.css";

export function SearchBar() {
  const [characters, setCharacters] = useState([]);
  const [id, setId] = useState("");

  const onSearch = async (id) => {
    try {
      const result = await axios(`/character/${id}`);
      console.log(result.data);

      const character = result.data.data;

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
      console.log(1);
    }
  };

  function handleInput(event) {
    setId(event.target.value);
  }

  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        name="search"
        placeholder="type id"
        onChange={(event) => handleInput(event)}
        value={id}
      />

      <button onClick={() => onSearch(parseInt(id))}>Search</button>
    </div>
  );
}
