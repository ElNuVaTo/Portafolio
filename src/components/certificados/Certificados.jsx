import styled from "styled-components";

import CertificadosJSON from "../../utils/json/Certificados.json";
import MapRenderCertificado from "./MapRenderCertificado";
import TituloSection from "../../utils/TituloSection";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 1300px;
  margin: auto;
`;
const Contenedor = styled.div`
  display: grid;
  width: 100%;
  margin: 20px auto;
  gap: 25px 0;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Certificados = () => {
  return (
    <>
      <Main>
        <TituloSection titulo="Certificados" />

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
      </Main>
    </>
  );
};

export default Certificados;
