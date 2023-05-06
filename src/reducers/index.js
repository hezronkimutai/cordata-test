import { combineReducers } from "redux";
import {
  GET_OPEN_API_CHOICES_SUCCESS,
  GET_AFRICAN_SALON_SUCCESS,
} from "../constants/index";

const initialState = {
  choices: [],
  imageUrlChoices: [],
  salonChoices: [],
  loading:false
};

export function openapi(state = initialState, action) {
  switch (action.type) {
    case GET_OPEN_API_CHOICES_SUCCESS:
      return { ...state, choices: action.choices };
    case GET_AFRICAN_SALON_SUCCESS:
      return {
        ...state,
        salonChoices: action.salonChoices,
        imageUrlChoices: action.imageUrlChoices,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ openapi });

export default rootReducer;
