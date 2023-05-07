import * as React from "react";
import "./CordataClient.css";
import { useState } from "react";
import CordataResponse from "./CordataResponse";
import CordataPrompt from "./CordataPrompt";
import { useEffect } from "react";
import ScrollTopButton from "./ScrollTopButton";
import ErrorComponent from "./ErrorComponent";
import Spinner from "./Spinner";

export const handleScrollToView = (id) => {
  const container = document.getElementById(id);
  container.scrollIntoView({ behavior: "smooth" });
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
    imageSize: "1024x1024",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    generateImageTags("", formData);
  };

  const handleChange = ({ target: { name, value } }) => {
    value && setFormData((prevProps) => ({ ...prevProps, [name]: value }));
  };

  const downloadName = formData.textImageTag.replace(" ", "_");

  useEffect(() => {
    if (generatedImageTagChoices.length) {
      handleScrollToView("imageContainer");
    }
  }, [generatedImageTagChoices]);
  return (
    <div className="cordata-client-container" id="cordataClientContainer">
      <Spinner loading={loading} />
      <ScrollTopButton />
      <h1 className="header">AI Image tag generator</h1>
      {(!generatedImageTagChoices.length && <ErrorComponent error={error} />) ||
        ""}
      <div>
        <CordataPrompt
          handleSubmit={handleSubmit}
          textImageTag={formData.textImageTag}
          noOfimages={formData.noOfimages}
          handleChange={handleChange}
          imageSize={formData.imageSize}
        />
        <p className="cordata-client-response-info">
          Click on LET'S GO button to regenerate the response
        </p>
        {!loading && (
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
