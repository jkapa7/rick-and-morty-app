import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards, reset } from "../redux/actions";
import Card from "../components/Card";
import styles from "../styles/Favorite.module.css";

const Favorites = (props) => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleClick = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "filter") {
      return dispatch(filterCards(value));
    }
    if (name === "order") {
      dispatch(orderCards(value));
    }
  };

  return (
    <div>
      <div>
        <div className={styles.cards}>
          <div>
            <select
              name="order"
              defaultValue={"DEFAULT"}
              onChange={handleClick}
            >
              <option value="DEFAULT" disabled>
                Select Order
              </option>
              <option value="Ascendente">Ascendente</option>
              <option value="Descendente">Descendente</option>
            </select>
          </div>
          <div>
            <select
              name="filter"
              defaultValue={"DEFAULT"}
              onChange={handleClick}
            >
              <option value="DEFAULT" disabled>
                Select Filter
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">Unknow</option>
            </select>

            <div>
              <button onClick={() => dispatch(reset())}>RESET</button>
            </div>
          </div>

          {myFavorites?.map((character) => {
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
    </div>
  );
};

export default Favorites;
