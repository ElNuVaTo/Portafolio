import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  max-width: 300px;
  background-color: var(--Secundario);
  margin: auto;
  border-radius: 2px;
  overflow: hidden;
  gap: 10px;
  padding-bottom: 10px;
`;
const Imagen = styled.a`
  display: flex;
  width: 100%;
  height: 220px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Nombre = styled.b`
  color: black;
  font-size: 15.5px;
`;

const MapRenderCertificado = ({ src, name, href }) => {
  return (
    <>
      <Contenedor>
        <Imagen href={href} target="_blank">
          <img src={src} draggable={false} />
        </Imagen>

        <Nombre>{name}</Nombre>
      </Contenedor>
    </>
  );
};

export default MapRenderCertificado;
