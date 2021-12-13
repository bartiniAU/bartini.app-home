import react from "react";
import styled, { css } from "styled-components";
import "./App.css";
import headerlogo from "./images/Bartini2_Wide_White.png";

function App() {
  return (
    <>
      <div
        style={{
          marginTop: "200px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          src={headerlogo}
          style={{
            background: "none",
            width: "100%",
            textAlign: "center",
            alignContent: "center",
          }}
        />
        <h1>Coming soon to android & ios.</h1>
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
