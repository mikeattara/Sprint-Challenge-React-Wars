import React from "react";
import "./Buttons.css";

const Buttons = ({ next, previous, action }) => (
  <div className="Buttons">
    <button onClick={() => action(previous)} disabled={previous === null}>
      Previous
    </button>
    <button onClick={() => action(next)} disabled={next === null}>
      Next
    </button>
  </div>
);

export default Buttons;
