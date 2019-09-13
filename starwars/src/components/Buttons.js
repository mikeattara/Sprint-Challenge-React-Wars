import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;

  button {
    min-width: 10rem;
    min-height: 48px;
    padding: 0.7rem;
    text-transform: uppercase;
    background: none;
    border: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: 2px;

    &:hover {
      background: rgba(0, 0, 0, 0.7);
      color: white;
      cursor: pointer;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

const Buttons = ({ next, previous, action }) => (
  <ButtonContainer>
    <button onClick={() => action(previous)} disabled={previous === null}>
      Previous
    </button>
    <button onClick={() => action(next)} disabled={next === null}>
      Next
    </button>
  </ButtonContainer>
);

export default Buttons;
