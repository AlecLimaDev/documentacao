import styled from "styled-components";

export const AboutTitle = styled.h1`
  font-family: sans-serif;
  text-align: center;
  padding: 1em 0.5em;
`;

export const Container = styled.div`
  flex-flow: column;
  align-items: start;
  text-align: start;
  max-width: 100%;

  h3 {
    font-family: Helvetica;
    background-color: yellow;
    color: red;
  }

  p {
    font-family: Arial;
    flex-wrap: wrap;
  }
`;
