import styled from "styled-components";

import EnlaceExterno from "../../assets/icons/Link_Externo.svg";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: auto;
  background-color: var(--Secundario);
  width: 95%;
  max-width: 600px;
  min-height: 165px;
  border-radius: 5px;
  padding: 15px 10px;
  gap: 10px;

  p {
    color: black;
    font-size: 15px;
  }
`;
const Enlace = styled.a`
  position: absolute;
  top: 8px;
  right: 8px;
  img {
    width: 20px;
    height: 20px;
  }
`;
const Nombre = styled.b`
  color: black;
  font-size: 15.5px;
`;

const MapRenderCertificado = ({  name, href, desc }) => {
  return (
    <>
      <Contenedor>
        <Enlace href={href} target="_blank">
          <img src={EnlaceExterno} draggable={false} />
        </Enlace>

        <Nombre>{name}</Nombre>

        <p>{desc}</p>
      </Contenedor>
    </>
  );
};

export default MapRenderCertificado;
