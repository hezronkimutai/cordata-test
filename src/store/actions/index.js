import * as constants from "../constants";
import axios from "axios";

const cordataOptions = {
  headers: {
    "Content-Type": "application/json",
    Authorization: constants.OPEN_API_AUTHORIZATION,
  },
};

const getCordataBody = (prompt, image, noOfimages, imageSize) => ({
  prompt,
  ...(image ? {} : { max_tokens: 1900 }),
  ...(!image ? {} : { model: "image-alpha-001" }),
  ...(!image ? {} : { n: Number(noOfimages) || 2 }),
  ...(!image ? {} : { size: imageSize || "1024x1024" }),
  ...(!image ? {} : { response_format: "url" }),
  ...(image ? {} : { stop: ["\n"] }),
});

export const setLoading = (loading) => {
  return {
    type: "LOADING",
    loading,
  };
};

export const generateImageTags = (baseTag, input) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios
      .post(
        constants.OPEN_AI_TEXT_TAG_BASE_URL,
        getCordataBody(
          `Generate a business name and tagline in English  ${
            baseTag ? `for an ${baseTag}` : baseTag
          } based on the following text: "${input.textImageTag}"`,
          false,
          input.noOfimages,
          input.imageSize
        ),
        cordataOptions
      )
      .then((response) => generateImage(dispatch, response, baseTag, input))
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch({
          type: constants.GENERATE_IMAGE_TAG_FAILURE,
          error,
        });
      });
  };
};

const generateImage = (dispatch, response, baseTag, input) =>
  axios
    .post(
      constants.OPEN_AI_GENERATOR_BASE_URL,
      getCordataBody(
        `Generate an image in English ${
          baseTag ? `of an ${baseTag}` : baseTag
        } based on the following text: "${input.textImageTag}"`,
        true,
        input.noOfimages,
        input.imageSize
      ),
      cordataOptions
    )
    .then((res) => {
      dispatch(setLoading(false));
      dispatch({
        type: constants.GENERATE_IMAGE_TAG_SUCCESS,
        generatedTextImageTagChoices: response.data.choices,
        generatedImageTagChoices: res.data.data,
      });
    })
    .catch((error) => {
      dispatch(setLoading(false));
      dispatch({
        type: constants.GENERATE_IMAGE_TAG_FAILURE,
        error,
      });
    });
