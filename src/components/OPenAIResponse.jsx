import * as React from "react";
import "./OpenApiClient.css";

const OPenAIResponse = ({ imageUrlChoices, downloadName, salonChoices }) => (
  <>
    {(imageUrlChoices.length && <h2>Gpt response</h2>) || ""}
    {salonChoices.map((choice, key) => (
      <p className="open-api-client-response" key={`${key}-${choice.text}`}>
        {choice.text}
      </p>
    ))}
    <div className="image-container">
      {imageUrlChoices.map((choice, key) => (
        <div key={`${key}-${choice.url}`} className="image-card">
          <img src={choice.url} alt="Girl in a jacket"></img>
          <a
            download
            alt={downloadName}
            href={choice.url}
            class="download-text"
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>
        </div>
      ))}
    </div>
  </>
);
export default OPenAIResponse;
