import Card from "./Card";
import styles from "../styles/Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={styles.cards}>
      {characters.map((character) => {
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
