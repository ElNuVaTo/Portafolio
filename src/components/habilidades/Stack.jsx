import styled from "styled-components";
import MapRenderImagen from "./MapRenderImagen";

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
  const Fundamental = [
    "/icons/progamacion/Css.svg",
    "/icons/progamacion/Html.svg",
    "/icons/progamacion/JavaScript.svg",
  ];
  const Adquirido = [
    "/icons/progamacion/React.svg",
    "/icons/progamacion/NextJS.svg",
    "/icons/progamacion/Git.svg",
  ];
  const Aprendiendo = [
    "/icons/progamacion/TypeScript.svg",
    "/icons/progamacion/Figma.svg",
  ];

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
