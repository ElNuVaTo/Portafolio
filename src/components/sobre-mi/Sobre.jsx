import styled from "styled-components";

import SobreMiJSON from "../../utils/json/SobreMi.json";
import Shape from "../../assets/shape/wave-haikei.svg";

const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 50px 2%;
  ::after {
    content: "";
    position: absolute;
    height: 55%;
    top: 0;
    width: 96%;
    z-index: -1;
    background-color: var(--Principal);
  }
`;
const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 10px 15px;
  gap: 10px;
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
const Contenedor_Styled = styled.div`
  position: relative;
  width: 100%;
`;
const Background_Styled = styled.img`
  top: 10px;
  position: absolute;
  user-select: none;
  z-index: -1;
  transform: rotate(180deg);
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Contenedor_Data_Historia = styled.div`
  display: flex;
  flex-direction: column;
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;

  b {
    color: #252525;
  }
  p {
    font-weight: 500;
    font-size: 15.5px;
    color: #434343;
    font-style: italic;
  }
`;
const Historia = styled.div``;

const Sobre = () => {
  return (
    <>
      <Main>
        {SobreMiJSON.map((item) => (
          <Contenedor key={item.name}>
            <Imagen>
              <img src={item.src} alt="" />
            </Imagen>

            <Contenedor_Styled>
              <Background_Styled src={Shape} />
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
            </Contenedor_Styled>
          </Contenedor>
        ))}
      </Main>
    </>
  );
};

export default Sobre;
