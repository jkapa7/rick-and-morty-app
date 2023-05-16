import styles from "../styles/SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");

  function handleInput(event) {
    setCharacter(event.target.value);
  }

  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        name="search"
        placeholder="type id"
        onChange={(event) => handleInput(event)}
        value={character}
      />

      <button onClick={() => props.onSearch(character)}>Search</button>
    </div>
  );
}
