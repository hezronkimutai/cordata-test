import * as React from "react";
import "./CordataClient.css";

const allowedImageSizes = ["256x256", "512x512", "1024x1024"];
const CordataPrompt = ({
  handleSubmit,
  textImageTag,
  handleChange,
  noOfimages,
  imageSize,
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
        Number Of Images :
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
      <label htmlFor="imageSize" className="cordata-client-image-size-label">
        Image Size
      </label>
      <select
        className="cordata-client-image-size"
        value={imageSize}
        name="imageSize"
        onChange={handleChange}
        id="select"
        required
      >
        {allowedImageSizes.map((option) => (
          <option key={option} value={option} required>
            {option}
          </option>
        ))}
      </select>
      <button className="cordata-client-button">LET"S GO</button>
    </div>
  </form>
);
export default CordataPrompt;
