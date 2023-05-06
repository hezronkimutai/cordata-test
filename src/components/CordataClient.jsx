import * as React from "react";
import "./CordataClient.css";
import { useState } from "react";
import CordataResponse from "./CordataResponse";
import CordataPrompt from "./CordataPrompt";

const ErrorComponent = ({ error }) => {
  const errorString =
    (error && error.response && error.response.data.error
      ? error.response.data.error.message
      : error.response.data) || "";

  return (
    <div className="error-container">
      <h2>{error && error.name}</h2>
      <p>{error && error.message}</p>
      <div dangerouslySetInnerHTML={{ __html: errorString }}></div>
    </div>
  );
};

function CordataClient(props) {
  const {
    generateImageTags,
    generatedTextImageTagChoices,
    generatedImageTagChoices,
    loading,
    error,
  } = props;
  const [formData, setFormData] = useState({
    textImageTag: "",
    noOfimages: "1",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    generateImageTags("", formData);
  };

  const handleChange = ({ target: { name, value } }) => {
    value && setFormData((prevProps) => ({ ...prevProps, [name]: value }));
  };

  const downloadName = formData.textImageTag.replace(" ", "_");

  return (
    <div className="cordata-client-container">
      <h1 className="header">AI Image tag generator</h1>
      {(error && <ErrorComponent error={error} />) || ""}
      <div>
        <CordataPrompt
          handleSubmit={handleSubmit}
          textImageTag={formData.textImageTag}
          noOfimages={formData.noOfimages}
          handleChange={handleChange}
        />
        <p className="cordata-client-response-info">
          Click Submit to regenerate the response
        </p>
        {loading ? (
          <p className="cordata-client-loading">Loading .....</p>
        ) : (
          <CordataResponse
            generatedImageTagChoices={generatedImageTagChoices}
            downloadName={downloadName}
            generatedTextImageTagChoices={generatedTextImageTagChoices}
          />
        )}
      </div>
    </div>
  );
}

export default CordataClient;
