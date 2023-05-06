import { combineReducers } from "redux";
import * as constants from "../constants/index";

const initialState = {
  choices: [],
  generatedImageTagChoices: [],
  generatedTextImageTagChoices: [],
  loading: false,
  error: "",
};

export function cordata(state = initialState, action) {
  switch (action.type) {
    case constants.GENERATE_IMAGE_TAG_FAILURE:
      return {
        ...initialState,
        error: action.error,
      };
    case constants.GENERATE_IMAGE_TAG_SUCCESS:
      return {
        ...state,
        generatedTextImageTagChoices: action.generatedTextImageTagChoices,
        generatedImageTagChoices: action.generatedImageTagChoices,
      };
    case constants.LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ cordata });

export default rootReducer;
