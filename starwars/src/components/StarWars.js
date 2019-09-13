import React from "react";
import styled from "styled-components";
import Character from "./Character";

const StarWarsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
`;

const StarWars = ({ characters }) => (
  <StarWarsContainer>
    {characters.map(character => (
      <Character key={character.name} character={character} />
    ))}
  </StarWarsContainer>
);

export default StarWars;
