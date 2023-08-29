import styled from "styled-components";

import ImageHabilidad from "./ImageHabilidad";
import HabilidadesJSON from "../../utils/json/Habilidades.json";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2%;
  margin: auto;
  margin: 100px auto 150px auto;
`;
const Habilidades = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  gap: 50px;
`;

const Stack = () => {
  return (
    <>
      <Main>
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
