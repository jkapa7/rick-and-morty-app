import Card from "./Card";
import styles from "../styles/Cards.module.css";
import SearchBar from "./SearchBar";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div>
      <div>
        <SearchBar onSearch={props.onSearch} />
      </div>

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
    </div>
  );
}
