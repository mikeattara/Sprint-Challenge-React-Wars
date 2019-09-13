import React from "react";
import "./Character.css";

const Character = ({ character }) => (
  <div className="Character">
    <h2>{character.name}</h2>
    <p>
      <span>Gender:</span> {character.gender}
    </p>
    <p>
      <span>Birth year:</span> {character.birth_year}
    </p>
    <p>
      <span>Height:</span> {character.height}
    </p>
    <p>
      <span>Mass:</span> {character.mass}
    </p>
    <p>
      <span>Eye color:</span> {character.eye_color}
    </p>
    <p>
      <span>Skin color:</span> {character.skin_color}
    </p>
    <p>
      <span>Hair color:</span> {character.hair_color}
    </p>
  </div>
);

export default Character;
