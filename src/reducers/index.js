import { combineReducers } from "redux";
import { GET_OPEN_API_CHOICES_SUCCESS } from "../constants/index";

const initialState = { choices: [] };

export function openapi(state = initialState, action) {
  switch (action.type) {
    case GET_OPEN_API_CHOICES_SUCCESS:
      return { ...state, choices: action.choices };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ openapi });

export default rootReducer;
