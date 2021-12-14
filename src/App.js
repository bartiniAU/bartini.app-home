import React from "react";
import styled, { css } from "styled-components";
import "./App.css";
import headerlogo from "./images/Bartini2_Wide_White.png";
import arrow from "./images/arrow-right.png";
import { Bounce } from "react-reveal";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";

function App() {
  return (
    <>
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 80,
              },
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "top",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="home">
        <div
          style={{
            marginTop: "200px",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Fade top distance="40px">
            <img
              src={headerlogo}
              alt="bartini logo"
              style={{
                background: "none",
                width: "100%",
                textAlign: "center",
                alignContent: "center",
              }}
            />
          </Fade>
          <h1 style={{ marginTop: "10px", opacity: "80%" }}>
            <Typewriter
              options={{
                strings: [
                  "Cocktails made easy.",
                  "Pre-drinks sorted.",
                  "This round's on the house.",
                  "Cocktail making made simple.",
                  "Drinks made with love.",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                delay: 80,
              }}
            />{" "}
          </h1>
          <Bounce cascade>
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "100px",
              }}
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.instagram.com/Bartini.app/");
              }}
            >
              Coming soon{" "}
              <img
                src={arrow}
                alt=">"
                style={{ height: "40%", padding: "0 0 0 20px" }}
              />
            </Button>
          </Bounce>
        </div>
      </div>
    </>
  );
}

export default App;

const Button = styled.button`
  height: 40px;
  width: 200px;
  background: transparent;
  border-radius: 30px;
  border: 1px solid white;
  color: white;
  opacity: 80%;
  margin: 0 auto;
  transition: 1s;
  font-weight: 300;
  font-size: 18px;

  &:hover {
    background: white;
    color: var(--primary);
  }

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;
