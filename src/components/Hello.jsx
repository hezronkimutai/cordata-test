import * as React from "react";
import "./Hello.css";

function Hello(props) {
  const { name, enthusiasmLevel, onIncrement, onDecrement } = props;
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name}
        {enthusiasmLevel}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;
