export const OPEN_API_MODEL = "gpt-3.5-turbo-0301";

export const OPEN_API_USER = "user";

export const OPEN_API_AUTHORIZATION = `Bearer ${process.env.REACT_APP_OPEN_AI_AUTHORIZATION}`;

export const GENERATE_IMAGE_TAG_SUCCESS = "GENERATE_IMAGE_TAG_SUCCESS";

export const GENERATE_IMAGE_TAG_FAILURE = "GENERATE_IMAGE_TAG_FAILURE";

export const OPEN_AI_CHAT_BASE_URL =
  "https://api.openai.com/v1/chat/completions";

export const OPEN_AI_TEXT_BASE_URL = "https://api.openai.com";

export const OPEN_AI_TEXT_TAG_BASE_URL = `${OPEN_AI_TEXT_BASE_URL}/v1/engines/davinci/completions`;

export const OPEN_AI_GENERATOR_BASE_URL = `${OPEN_AI_TEXT_BASE_URL}/v1/images/generations`;

export const LOADING = "LOADING";
