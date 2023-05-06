import * as React from "react";
import "./OpenApiClient.css";
import { useState } from "react";

function OpenApiClient(props) {
  const { makeOpenApiReq, choices } = props;
  const initialOpenAPiInput =
    "write a social text that talks about React in more than 200 words";
  const [openApiInput, setOpenApiInput] = useState(initialOpenAPiInput);
  if (choices.length <= 0) {
    // throw new Error("You could be a little more enthusiastic. :D");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    makeOpenApiReq(openApiInput);
  };

  const handleChange = ({ preventDefault, target: { value } }) => {
    preventDefault();
    setOpenApiInput(value);
  };

  return (
    <div className="open-api-client-container">
      <h1 className="header">OpenApiClient</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <textarea
              className="open-api-client-textarea"
              defaultValue={initialOpenAPiInput}
              onChange={handleChange}
            />
          </div>
          <button onClick={() => makeOpenApiReq(openApiInput)}>SUBMIT</button>
        </form>
        {choices.length && <h2>Gpt response</h2>}
        {choices.map((choice, key) => (
          <p className="open-api-client-response" key={`${key}-${choice.message.content}`}>
            {choice.message.content}
          </p>
        ))}
      </div>
    </div>
  );
}

export default OpenApiClient;
