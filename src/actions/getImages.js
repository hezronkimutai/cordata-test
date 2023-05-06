import * as constants from "../constants";
import axios from "axios";

const openApiOptions = {
  headers: {
    "Content-Type": "application/json",
    Authorization: constants.OPEN_API_AUTHORIZATION,
  },
};
const getOpenApiBody = (prompt, image) => ({
  prompt,
  ...(image ? {} : { max_tokens: 1900 }),
  n: 1,
  ...(image ? {} : { stop: ["\n"] }),
});

export const setLoading = (loading) => {
  return {
    type: "LOADING",
    loading,
  };
};
export const makeOpenApiReqImages = (baseTag, input) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios
      .post(
        constants.TAB_BASE_URL,
        getOpenApiBody(
          `Generate a business name and tagline in English  ${
            baseTag ? `for an ${baseTag}` : baseTag
          } based on the following text: "${input}"`,
          false
        ),
        openApiOptions
      )
      .then((response) => generateImage(dispatch, response, baseTag, input))
      .catch((e) => {
        dispatch(setLoading(false));
        dispatch({
          type: constants.GET_AFRICAN_SALON_FAILURE,
          salonChoices: [],
          imageUrlChoices: "",
        });
      });
  };
};

const generateImage = (dispatch, response, baseTag, input) =>
  axios
    .post(
      constants.GENERATOR_BASE_URL,
      getOpenApiBody(
        `Generate an image in English ${
          baseTag ? `of an ${baseTag}` : baseTag
        } based on the following text: "${input}"`,
        true
      ),
      openApiOptions
    )
    .then((res) => {
      dispatch(setLoading(false));
      dispatch({
        type: constants.GET_AFRICAN_SALON_SUCCESS,
        salonChoices: response.data.choices,
        imageUrlChoices: res.data.data,
      });
    });
