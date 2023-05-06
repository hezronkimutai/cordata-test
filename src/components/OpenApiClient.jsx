import * as React from "react";
import "./OpenApiClient.css";

function OpenApiClient(props) {
  const { makeOpenApiReq, choices } = props;
  if (choices.length <= 0) {
    // throw new Error("You could be a little more enthusiastic. :D");
  }

  console.log({ choices });

  return (
    <div className="OpenApiClient">
      <div className="greeting">OpenApiClient</div>
      <div>
        <button
          onClick={() =>
            makeOpenApiReq(
              "write a social text that talks about React in more than 200 words"
            )
          }
        >
          makeOpenApiReq
        </button>
        <h1>Choices</h1>
        {choices.map((choice, key) => (
          <p key={`${key}-${choice.message.content}`}>
            {choice.message.content}
          </p>
        ))}
      </div>
    </div>
  );
}

export default OpenApiClient;
