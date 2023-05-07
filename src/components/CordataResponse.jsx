import * as React from "react";
import "./CordataClient.css";
import { useState } from "react";
import Spinner from "./Spinner";

const CordataResponse = ({
  generatedImageTagChoices,
  downloadName,
  generatedTextImageTagChoices,
}) => {
  const [imageLoads, setImageLoads] = useState({});
  return (
    <>
      {(generatedImageTagChoices.length && (
        <h2 className="header-2">AI generated response</h2>
      )) ||
        ""}

      <div className="image-container" id="imageContainer">
        {generatedImageTagChoices.map((choice, key) => (
          <div key={`${key}-${choice.url}`} className="image-card">
            <Spinner loading={!imageLoads[key]} />
            <img
              onLoad={() => setImageLoads((prev) => ({ ...prev, [key]: true }))}
              src={choice.url}
              alt={downloadName}
            />
            <a
              download
              href={`${choice.url}`}
              className="download-text"
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </div>
        ))}
      </div>
      {generatedTextImageTagChoices.map((choice, key) => (
        <p className="cordata-client-response" key={`${key}-${choice.text}`}>
          {choice.text}
        </p>
      ))}
    </>
  );
};
export default CordataResponse;
