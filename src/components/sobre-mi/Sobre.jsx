import styled from "styled-components";

const Contenedor = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 100px 0;
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

const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  margin: auto;
  width: 90%;
  max-width: 630px;
  border-radius: 2px;
  background-color: var(--Secundario);
  gap: 5px 10px;

  @media (min-width: 450px) {
    flex-direction: row;
    padding: 25px 15px;
  }
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
const Contenedor_Data_Historia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  b {
    color: black;
  }
  em {
    color: #1e1e1e;
    font-size: 15px;
  }
`;
const Historia = styled.div`
  p {
    color: #5a5a5a;
    font-size: 15.5px;
  }
`;

const Sobre = () => {
  return (
    <>
      <Contenedor>
        <Perfil>
          <Imagen>
            <img src="/photos/ProfileGitHub.jpg" alt="" />
          </Imagen>
          <Contenedor_Data_Historia>
            <Data>
              <b>Angelo Amaro Alcaino Veloso</b>

              <em>Desarrollador Frontend</em>
            </Data>
            <Historia>
              <p>
                Me destaco por ser una persona colaborativa y tranquila, capaz
                de trabajar en armonía con mis compañeros sin generar
                conflictos. Soy autocrítico y constantemente reflexiono sobre
                mis acciones, buscando siempre hacer lo mejor posible. Estoy
                abierto a nuevas ideas y siempre considero si hay mejores formas
                de mejorar mi trabajo.
              </p>
            </Historia>
          </Contenedor_Data_Historia>
        </Perfil>
      </Contenedor>
    </>
  );
};

export default Sobre;
