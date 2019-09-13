import React from "react";
import "./Buttons.css";

const Buttons = ({ next, previous, action }) => (
  <div className="Buttons">
    <button onClick={() => action(previous)}>Previous</button>
    <button onClick={() => action(next)}>Next</button>
  </div>
);

export default Buttons;
