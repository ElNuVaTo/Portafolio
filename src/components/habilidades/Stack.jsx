import styled from "styled-components";

import ImageHabilidad from "./ImageHabilidad";
import TituloSection from "../../utils/TituloSection";
import HabilidadesJSON from "../../utils/json/Habilidades.json";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 1300px;
  margin: auto;
`;
const Habilidades = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px auto;
  gap: 25px;
`;

const Stack = () => {
  return (
    <>
      <Main>
        <TituloSection titulo="Habilidades" />
        <Habilidades>
          {HabilidadesJSON.map((item) => (
            <ImageHabilidad
              key={item.name}
              name={item.name}
              skills={item.skills}
            />
          ))}
        </Habilidades>
      </Main>
    </>
  );
};

export default Stack;
