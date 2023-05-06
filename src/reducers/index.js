import { combineReducers } from "redux";
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "../constants/index";

const initialState = { enthusiasmLevel: 1 };
export function enthusiasm(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1),
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ enthusiasm });

export default rootReducer;
