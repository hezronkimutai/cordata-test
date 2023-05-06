import * as React from "react";
import "./OpenApiClient.css";
import { useState } from "react";
import OPenAIResponse from "./OPenAIResponse";
import OpenAiPrompt from "./OpenAiPrompt";


function OpenApiClient(props) {
  const { makeOpenApiReqImages, salonChoices, imageUrlChoices, loading } =
    props;
  const initialBaseTag = "African hair salon";
  const initialOpenAPiInput = "African hair salon";
  const [openApiInput, setOpenApiInput] = useState(initialOpenAPiInput);
  const [businessType, setBusinessType] = useState(initialBaseTag);
  console.log({ loading });
  const handleSubmit = (e) => {
    e.preventDefault();
    makeOpenApiReqImages(businessType, openApiInput);
  };

  const handleChange = ({ target: { value } }) => {
    value && setOpenApiInput(value);
  };

  const downloadName = businessType.replace(" ", "_");

  console.log({env:process.env});
  return (
    <div className="open-api-client-container">
      <h1 className="header">Cordata AI Client</h1>
      <div>
        <OpenAiPrompt
          handleSubmit={handleSubmit}
          businessType={businessType}
          setBusinessType={setBusinessType}
          initialOpenAPiInput={initialOpenAPiInput}
          handleChange={handleChange}
        />
        <p className="open-api-client-response-info">
          Click Submit to regenerate the response
        </p>
        <OPenAIResponse
          imageUrlChoices={imageUrlChoices}
          downloadName={downloadName}
          salonChoices={salonChoices}
        />
      </div>
    </div>
  );
}

export default OpenApiClient;
