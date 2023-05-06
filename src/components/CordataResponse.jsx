import * as React from "react";
import "./CordataClient.css";

const CordataResponse = ({
  generatedImageTagChoices,
  downloadName,
  generatedTextImageTagChoices,
}) => (
  <>
    {(generatedImageTagChoices.length && (
      <h2 className="header-2">AI generated response</h2>
    )) ||
      ""}
    <div className="image-container" id="imageContainer">
      {generatedImageTagChoices.map((choice, key) => (
        <div key={`${key}-${choice.url}`} className="image-card">
          <img src={choice.url} alt={downloadName} width="800"></img>
          <a
            download
            href={`${choice.url}`}
            class="download-text"
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
export default CordataResponse;
