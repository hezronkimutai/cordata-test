import { combineReducers } from "redux";
import {
  GET_OPEN_API_CHOICES_SUCCESS,
  GET_AFRICAN_SALON_SUCCESS,
} from "../constants/index";

const initialState = {
  choices: [],
  imageUrlChoices: [
    {
      url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-JPJkDBgpLPMtvWu4qRk57IgR/user-tKY6PaOQZsIQFE7Wv5BnUfpa/img-WR3qX5Tvh0tlpr75VMYQ8KjX.png?st=2023-05-06T12%3A13%3A03Z&se=2023-05-06T14%3A13%3A03Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-05-06T00%3A37%3A37Z&ske=2023-05-07T00%3A37%3A37Z&sks=b&skv=2021-08-06&sig=X/fn%2BM4g0FNZp0BeE8Vkjj48E06yG2FWuff1XgPZEe4%3D",
    },
  ],
  salonChoices: [],
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
