import styles from "../styles/Detail.module.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  console.log(detailId);

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.detail}>
      <div className={styles.detailCard}>
        <div className={styles.txt}>
          <h1>{character.name}</h1>
          <h3>{character.status}</h3>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p> {character.origin?.name}</p>
        </div>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
};

export default Detail;

// Status;
// Specie;
// Gender;
// Origin;
// Image;
