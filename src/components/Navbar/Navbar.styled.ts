import styled from "styled-components";

export const Title = styled.h1`
  font-family: sans-serif;
`;

export const Header = styled.div`
  display: block;
  padding: 3em 4em;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  text-align: center;
  color: white;
`;

export const OrderLink = styled.ul`
  font-family: sans-serif;
  text-transform: none;
  padding: 8px;
`;

export const Links = styled.a`
  text-transform: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: yellow;
    padding: 1.5em 1.8em;
    color: black;
    width: 100%;
  }
`;
