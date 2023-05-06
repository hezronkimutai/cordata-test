import * as constants from "../constants";
import axios from "axios";

export const makeOpenApiReqImages = (baseTag, input) => {
  return (dispatch) => {
    axios
      .post(
        "https://api.openai.com/v1/engines/davinci/completions",
        {
          prompt: `Generate a business name and tagline in English  ${
            baseTag ? `for an ${baseTag}` : baseTag
          } based on the following text: "${input}"`,
          max_tokens: 1900,
          n: 1,
          stop: ["\n"],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: constants.OPEN_API_AUTHORIZATION,
          },
        }
      )
      .then((response) => {
        axios
          .post(
            "https://api.openai.com/v1/images/generations",
            {
              model: "image-alpha-001",
              prompt: `Generate an image in English ${
                baseTag ? `of an ${baseTag}` : baseTag
              } based on the following text: "${input}"`,
              num_images: 5,
              size: "256x256",
              response_format: "url",
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: constants.OPEN_API_AUTHORIZATION,
              },
            }
          )
          .then((res) => {
            dispatch({
              type: constants.GET_AFRICAN_SALON_SUCCESS,
              salonChoices: response.data.choices,
              imageUrlChoices: res.data.data,
            });
          });
      })
      .catch((e) => {
        return {
          type: constants.GET_AFRICAN_SALON_FAILURE,
          salonChoices: [],
          imageUrlChoices: "",
        };
      });
  };
};
