import * as React from "react";
import "./OpenApiClient.css";

const OpenAiPrompt = ({
  handleSubmit,
  businessType,
  setBusinessType,
  initialOpenAPiInput,
  handleChange,
}) => (
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
);
export default OpenAiPrompt;
