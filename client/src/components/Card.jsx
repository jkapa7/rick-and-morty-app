import styles from "../styles/Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorites } from "../redux/actions";

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((s) => s.myFavorites);

  const handleFavorite = (character) => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorites(character.id));
    } else {
      setIsFav(true);
      dispatch(addFavorites(character));
    }
  };

  useEffect(() => {
    myFavorites.forEach((character) => {
      if (character.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  return (
    <div className={styles.card}>
      <div className={styles.buttons}>
        <div>
          {isFav ? (
            <button onClick={() => handleFavorite(props)}>❤️</button>
          ) : (
            <button onClick={() => handleFavorite(props)}>🤍</button>
          )}
        </div>

        <div>
          <button onClick={props.onClose} className={styles.delete}>
            X
          </button>
        </div>
      </div>

      <div className={styles.txt}>
        <Link to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
          <img src={props.image} alt={props.image} />
          <p>{props.species}</p>
          <p>{props.gender}</p>
        </Link>
      </div>
    </div>
  );
}
