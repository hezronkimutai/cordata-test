import * as constants from "../constants";
import axios from "axios";

export const makeOpenApiReq = (input) => {
  return (dispatch) => {
    return axios
      .post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo-0301",
          messages: [
            {
              role: "user",
              content: input,
            },
          ],
          max_tokens: 50,
          n: 1,
          stop: ".",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer API-KEY`,
          },
        }
      )
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
