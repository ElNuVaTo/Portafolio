import styled from "styled-components";

import CertificadosJSON from "../../utils/json/Certificados.json";
import MapRenderCertificado from "./MapRenderCertificado";

import Shape from "../../assets/shape/undraw_certificate_re_yadi.svg";
import Top from "../../assets/shape/Top.svg";
import Bottom from "../../assets/shape/Bottom.svg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 0;
  margin: auto;
  margin: 30px auto 45px auto;
  position: relative;
`;
const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
  gap: 25px;
  width: 100%;
`;
const WaveBottom = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  overflow: hidden;
`;
const ImageBottom = styled.img`
  position: absolute;
  bottom: calc(100% - 100px);
  left: 0;
  height: 100px;
  width: 100%;
  object-fit: cover;
`;
const ImageTop = styled.img`
  position: absolute;
  top: calc(100% - 100px);
  left: 0;
  height: 100px;
  width: 100%;
  object-fit: cover;
`;
const WaveTop = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
`;
const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  img {
    height: 150px;
    width: 150px;
  }
  h2 {
    color: white;
  }
`;
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-evenly;
  padding: 25px 0;
  background-color: #242541;
  gap: 20px 15px;
`;

const Certificados = () => {
  return (
    <>
      <Main>
        <WaveTop>
          <ImageTop src={Top} alt="" />
        </WaveTop>

        <WaveBottom>
          <ImageBottom src={Bottom} alt="" />
        </WaveBottom>

        <Div>
          <Image>
            <img src={Shape} alt="" />
            <h2>Certificados</h2>
          </Image>
          <Contenedor>
            {CertificadosJSON.map((item) => (
              <>
                <MapRenderCertificado
                  name={item.name}
                  href={item.href}
                  desc={item.desc}
                />
              </>
            ))}
          </Contenedor>
        </Div>
      </Main>
    </>
  );
};

export default Certificados;
