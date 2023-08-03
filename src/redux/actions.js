import axios, { all } from "axios";
import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER,
  ORDER,
  RESET,
  GET_ALL_CHARACTERS,
  GET_DETAIL,
} from "./action_type";

export const addFavorites = (ch) => {
  return async function (dispatch) {
    try {
      const character = await axios.post(`/fav`, ch);
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
      await axios.delete(`rickandmorty/fav/${id}`);
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

export const getAllCharacters = () => {
  return async function (dispatch) {
    try {
      const allCharacters = await axios.get("/character");

      dispatch({
        type: GET_ALL_CHARACTERS,
        payload: allCharacters.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      const detail = axios.get(`/character/${id}`);
      dispatch({
        type: GET_DETAIL,
        payload: detail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
