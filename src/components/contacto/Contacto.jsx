import styled from "styled-components";

import TituloSection from "../../utils/TituloSection";
import ContactoJSON from "../../utils/json/Contacto.json";
import RenderContacto from "./RenderContacto";
const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 1300px;
  margin: auto;
`;

const Contenedor = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin: 20px auto;
  gap: 20px 50px;
  background-color: var(--Secundario);
  padding: 5px 20px;
  border-radius: 5px;
`;

const Contacto = () => {
  return (
    <>
      <Main>
        <TituloSection titulo="Contactame" />

        <Contenedor>
          {ContactoJSON.map((item) => (
            <div key={item.data}>
              <RenderContacto
                src={item.src}
                data={item.data}
                href={item.href}
              />
            </div>
          ))}
        </Contenedor>
      </Main>
    </>
  );
};

export default Contacto;
