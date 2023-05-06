import * as constants from "../constants";
import axios from "axios";

const getOpenApiBody = (input) => ({
  model: constants.OPEN_API_MODEL,
  messages: [
    {
      role: constants.OPEN_API_USER,
      content: input,
    },
  ],
  max_tokens: 4000,
  n: 1,
  stop: ".",
});

const openApiOptions = {
  headers: {
    "Content-Type": "application/json",
    Authorization: constants.OPEN_API_AUTHORIZATION,
  },
};

export const makeOpenApiReq = (input) => {
  return (dispatch) => {
    return axios
      .post(constants.OPEN_API_BASE_URL, getOpenApiBody(input), openApiOptions)
      .then((response) => {
        dispatch({
          type: constants.GET_OPEN_API_CHOICES_SUCCESS,
          choices: response.data.choices,
        });
      })
      .catch(() => {
        return {
          type: constants.GET_OPEN_API_CHOICES_FAILURE,
          choices: [],
        };
      });
  };
};
