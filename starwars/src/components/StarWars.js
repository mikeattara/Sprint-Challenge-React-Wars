import React from "react";
import Character from "./Character";
import "./StarWars.css";

const StarWars = ({ characters }) => (
  <div className="StarWars">
    {characters.map(character => (
      <Character character={character} />
    ))}
  </div>
);

export default StarWars;
