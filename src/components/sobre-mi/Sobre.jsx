import styled from "styled-components";

import SobreMiJSON from "../../utils/json/SobreMi.json";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 50px 0;
  ::after {
    content: "";
    position: absolute;
    height: 50%;
    top: 0;
    width: 100%;
    z-index: -1;
    background-color: var(--Principal);
  }
`;
const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 8px 10px;
  width: 90%;
  max-width: 600px;
  border-radius: 5px;
  background-color: var(--Secundario);
`;
const Imagen = styled.div`
  border-radius: 50%;
  min-width: 150px;
  max-width: 150px;
  height: 150px;
  margin: auto;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const FondoStyled = styled.div`
  padding-top: 15px;
  position: relative;
  width: 100%;
  ::after {
    content: "";
    position: absolute;
    height: 50%;
    top: 0;
    width: 100%;
    z-index: -1;
    background-color: var(--Principal);
  }
`;
const Contenedor_Data_Historia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  b {
    color: black;
  }
  p {
    color: #464646;
    font-size: 13px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
const Historia = styled.div`
  p {
    color: #2d2d2d;
    font-size: 15.5px;
  }
`;

const Sobre = () => {
  return (
    <>
      <Main>
        {SobreMiJSON.map((item) => (
          <Contenedor key={item.name}>
            <Imagen>
              <img src={item.src} alt="" />
            </Imagen>
            <FondoStyled>
              <Perfil key={item.nombre}>
                <Contenedor_Data_Historia>
                  <Data>
                    <b>{item.nombre}</b>

                    <p>{item.puesto}</p>
                  </Data>
                  <Historia>
                    <p>{item.desc}</p>
                  </Historia>
                </Contenedor_Data_Historia>
              </Perfil>
            </FondoStyled>
          </Contenedor>
        ))}
      </Main>
    </>
  );
};

export default Sobre;
