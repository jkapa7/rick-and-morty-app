import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER,
  ORDER,
  RESET,
} from "./action_type";

import axios from "axios";

export const addFavorites = (ch) => {
  return async function (dispatch) {
    try {
      const character = await axios.post(
        `http://localhost:3001/rickandmorty/fav`,
        ch
      );
      dispatch({
        type: ADD_FAVORITES,
        payload: character.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFavorites = (id) => {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      dispatch({
        type: DELETE_FAVORITES,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterCards = (status) => {
  return {
    type: FILTER,
    payload: status,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
