import * as React from "react";
import "./OpenApiClient.css";
import { useState } from "react";

function OpenApiClient(props) {
  const { makeOpenApiReqImages, salonChoices, imageUrlChoices } = props;
  const initialBaseTag = "African hair salon";
  const initialOpenAPiInput = "African hair salon";
  const [openApiInput, setOpenApiInput] = useState(initialOpenAPiInput);
  const [businessType, setBusinessType] = useState(initialBaseTag);
  console.log({ salonChoices, imageUrlChoices });
  const handleSubmit = (e) => {
    e.preventDefault();
    makeOpenApiReqImages(businessType, openApiInput);
  };

  const handleChange = ({ target: { value } }) => {
    value && setOpenApiInput(value);
  };

  const downloadName = businessType.replace(" ", "_");

  return (
    <div className="open-api-client-container">
      <h1 className="header">OpenApiClient</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              value={businessType}
              type="text"
              placeholder="Enter business type"
              onChange={({ target: { value } }) => setBusinessType(value)}
            />
          </div>
          <div>
            <textarea
              className="open-api-client-textarea"
              defaultValue={initialOpenAPiInput}
              onChange={handleChange}
            />
          </div>
          <button>SUBMIT</button>
        </form>
        <p className="open-api-client-response-info">
          Click Submit to regenerate the response
        </p>
        {(imageUrlChoices.length && <h2>Gpt response</h2>) || ""}
        {salonChoices.map((choice, key) => (
          <p className="open-api-client-response" key={`${key}-${choice.text}`}>
            {choice.text}
          </p>
        ))}
        <div className="image-container">
          {imageUrlChoices.map((choice, key) => (
            <div className="image-card">
              <img
                key={`${key}-${choice.url}`}
                src={choice.url}
                alt="Girl in a jacket"
              ></img>
              <a
                download
                alt={downloadName}
                href={choice.url}
                class="download-text"
                target="_blank"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OpenApiClient;
