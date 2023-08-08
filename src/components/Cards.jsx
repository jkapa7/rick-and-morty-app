// import Card from "./Card";
import styles from "../styles/Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cards() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.allCharacters);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  return (
    <div className={styles.cards}>
      {allCharacters.map(({ id, name, species, gender, image }) => {
        return (
          <Link key={id} id={id} to={`/detail/${id}`}>
            <div>
              <img src={image} />
              <p>{name}</p>
              <p>{species}</p>
              <p>{gender}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
