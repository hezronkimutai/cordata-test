import * as React from "react";
import "./CordataClient.css";

const ErrorComponent = ({ error }) => {
  const errorred = error && error.response;
  const errorString =
    (errorred && error.response.data.error
      ? errorred && error.response.data.error.message
      : errorred && error.response.data) || "";

  return (
    (errorred && (
      <div className="error-container">
        <h2>{error.name}</h2>
        <p>{error.message}</p>
        <div dangerouslySetInnerHTML={{ __html: errorString }}></div>
      </div>
    )) ||
    ""
  );
};

export default ErrorComponent;
