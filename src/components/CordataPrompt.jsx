import * as React from "react";
import "./CordataClient.css";

const CordataPrompt = ({
  handleSubmit,
  textImageTag,
  handleChange,
  noOfimages,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="cordata-client-form-container">
      <label
        htmlFor="textImageTag"
        className="cordata-client-text-image-tag-label"
      >
        Enter a text to generate image tag below
      </label>
      <textarea
        className="cordata-client-textarea"
        value={textImageTag}
        onChange={handleChange}
        name="textImageTag"
        placeholder="Enter text to generate image tag e.g Africanicty "
      />
      <label htmlFor="noOfimages" className="cordata-client-no-of-images-label">
        Copies of images to be generated:
      </label>
      <input
        type="number"
        id="noOfimages"
        name="noOfimages"
        min="1"
        max="510"
        value={noOfimages}
        onChange={handleChange}
        className="cordata-client-input"
        required
      ></input>
      <button className="cordata-client-button">LET"S GO</button>
    </div>
  </form>
);
export default CordataPrompt;
