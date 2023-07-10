import styled from "styled-components";
import MapRenderImagen from "./MapRenderImagen";

import Css from "../../assets/icons/progamacion/Css.svg";
import Html from "../../assets/icons/progamacion/Html.svg";
import Js from "../../assets/icons/progamacion/JavaScript.svg";

import React from "../../assets/icons/progamacion/React.svg";
import NextJS from "../../assets/icons/progamacion/NextJS.svg";
import Git from "../../assets/icons/progamacion/Git.svg";

import TypeScript from "../../assets/icons/progamacion/TypeScript.svg";
import Figma from "../../assets/icons/progamacion/Figma.svg";

const Contenedor = styled.section``;
const Habilidades = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 100px auto;
  gap: 25px 0;
  width: 75%;
  max-width: 850px;
  border-radius: 2px;
  padding: 25px 0;
  background-color: var(--Secundario);
  @media (min-width: 450px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 25px 15px;
  }
`;

const Stack = () => {
  const Fundamental = [Css, Html, Js];
  const Adquirido = [React, NextJS, Git];
  const Aprendiendo = [TypeScript, Figma];

  return (
    <>
      <Contenedor>
        <Habilidades>
          <MapRenderImagen titulo="Fundamental" stackMap={Fundamental} />

          <MapRenderImagen titulo="Adquirido" stackMap={Adquirido} />

          <MapRenderImagen titulo="En proceso..." stackMap={Aprendiendo} />
        </Habilidades>
      </Contenedor>
    </>
  );
};

export default Stack;
