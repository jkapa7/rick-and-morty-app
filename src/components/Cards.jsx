import Card from "./Card";
import styles from "../styles/Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../redux/actions";

export default function Cards(props) {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.allCharacters);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  return (
    <div className={styles.cards}>
      {allCharacters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => props.onClose(character.id)}
          />
        );
      })}
    </div>
  );
}
