import react from "react";
import styled, { css } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="home-wrapper">
        <h1>Home</h1>
      </div>
    </>
  );
}

export default App;

const Button = styled.button`
  height: 100px;
  width: 100px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  transition: 2s;

  &:hover {
    font-size: 40px;
    height: 200px;
    width: 200px;
  }
  &.dead {
    color: black;
  }

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;
