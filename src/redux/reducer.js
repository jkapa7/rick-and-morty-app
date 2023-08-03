import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER,
  ORDER,
  RESET,
  GET_ALL_CHARACTERS,
  GET_DETAIL,
} from "./action_type";

const initialState = {
  myFavorites: [],
  myFavoritesOrigin: [],
  allCharacters: [],
  detail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin, payload],
        myFavoritesOrigin: [...state.myFavoritesOrigin, payload],
      };

    case DELETE_FAVORITES:
      const filtered = state.myFavorites.filter((character) => {
        return character.id !== payload;
      });
      return {
        ...state,
        myFavorites: filtered,
        myFavoritesOrigin: filtered,
      };

    case FILTER:
      const filterCopy = [...state.myFavoritesOrigin];
      const filter = filterCopy.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: filter,
      };

    case ORDER:
      const orderCopy = [...state.myFavoritesOrigin];
      const order = orderCopy.sort((a, b) => {
        if (a.id > b.id) {
          return "Ascendente" === payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "Descendente" === payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: order,
      };

    case RESET:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin],
      };

    default:
      return state;
  }
};

export default rootReducer;
