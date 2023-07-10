import styled from "styled-components";

import MapRenderCertificado from "./MapRenderCertificado";

import MetaPDF from '../../assets/pdfs/Meta.pdf'
import MetaJPG from '../../assets/photos/MetaFront-End.jpg'
import DefaultPNG from '../../assets/photos/Default.png'

const Contenedor = styled.div`
  display: grid;
  width: 95%;
  margin: 20px auto;
  gap: 50px 0;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Certificados = () => {
  return (
    <>
      <div className="SubTitulo">
        <h2>Certificados</h2>
      </div>

      <Contenedor>
        <MapRenderCertificado
          name="Meta Front-End Developer"
          src={MetaJPG}
          href={MetaPDF}
        />

        <MapRenderCertificado
          name="Full Stack MERN"
          src={DefaultPNG}
          href=""
        />
        <MapRenderCertificado
          name="React Avanzado"
          src={DefaultPNG}
          href=""
        />
      </Contenedor>
    </>
  );
};

export default Certificados;
