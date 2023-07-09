import styled from "styled-components";

import MapRenderCertificado from "./MapRenderCertificado";

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
          src="/photos/MetaFront-End.jpg"
          href="/pdfs/Meta.pdf"
        />

        <MapRenderCertificado
          name="Full Stack MERN"
          src="/photos/Default.png"
          href=""
        />
        <MapRenderCertificado
          name="React Avanzado"
          src="/photos/Default.png"
          href=""
        />
      </Contenedor>
    </>
  );
};

export default Certificados;
