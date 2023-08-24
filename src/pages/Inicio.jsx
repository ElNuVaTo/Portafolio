import styled from "styled-components";

import Sobre from "../components/sobre-mi/Sobre";
import Proyectos from "../components/proyectos/Proyectos";
import Stack from "../components/habilidades/Stack";
import Contacto from "../components/contacto/Contacto";
import Certificados from "../components/certificados/Certificados";

const Main = styled.div`
  position: relative;
`;
const Fondo = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: linear-gradient(195deg, #101023 0%, #1b1b3a 115%);

`;
const Inicio = () => {
  return (
    <>
      <Main>
        <Fondo />
        <Sobre />
        <Proyectos />
        <Certificados />
        <Stack />
        <Contacto />
      </Main>
    </>
  );
};

export default Inicio;
