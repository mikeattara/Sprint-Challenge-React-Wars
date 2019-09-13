import React from "react";
import styled from "styled-components";

const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 3px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3)
  );

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: lightgray;
  }

  p {
    font-style: italic;

    span {
      font-style: initial;
      font-weight: 600;
    }
  }
`;

const Character = ({ character }) => (
  <CharacterCard>
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
  </CharacterCard>
);

export default Character;
