import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: auto;
  max-width: 300px;
  min-height: 450px;
  gap: 5px;
  background-color: var(--Secundario);
  border-radius: 2px;
  padding: 10px 5px;
`;
const Nombre = styled.h3`
  color: black;
  text-align: center;
`;
const Imagen = styled.a`
  overflow: hidden;
  aspect-ratio: 16/9;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const Desc = styled.div`
  p {
    color: black;
  }
`;

const MapRenderProyecto = ({ name, src, href, desc }) => {
  return (
    <>
      <Contenedor>
        <Nombre>{name}</Nombre>

        <Imagen href={href} target="_blank">
          <img src={src} draggable={false} />
        </Imagen>

        <Desc>
          <p>{desc}</p>
        </Desc>
      </Contenedor>
    </>
  );
};

export default MapRenderProyecto;
