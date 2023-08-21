import styled from "styled-components";

import LinkExterno from "../../assets/icons/Link_Externo.svg";
import { useState } from "react";

const Main = styled.div`
  display: flex;
  position: relative;
  background-color: var(--Secundario);
  width: 100%;
  height: 180px;
  gap: 10px;
  border-radius: 5px;
  padding: 10px;
`;
const Imagen = styled.div`
  overflow: hidden;
  min-width: 250px;
  height: 160px;
  border-radius: 10px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
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
const Informacion = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3px;
`;
const Descripcion = styled.div`
  padding-right: 15px;
  p {
    color: black;
  }
`;
const Nombre = styled.h3`
  color: black;
  text-align: center;
`;
const Habilidades = styled.ul`
  gap: 5px;
  li {
    display: flex;
    align-items: center;
    position: relative;
    color: black;
    margin: 3px 0;
    padding-left: 12px;
    ::after {
      content: "";
      position: absolute;
      left: 0;
      background-color: #171717;
      height: 5px;
      width: 5px;
      border-radius: 50%;
    }
  }
`;
const Button = styled.button`
  position: absolute;
  cursor: pointer;
  border: none;
  color: #ffffff;
  background-color: var(--Principal);
  bottom: 10px;
  right: 10px;
  border-radius: 15px;
  padding: 5px 10px;
  width: 95px;
  font-size: 15px;
`;

const MapRenderProyecto = ({ name, src, href, desc, skills }) => {
  const [visible, setVisible] = useState(false);
  const cambiarVisible = () => setVisible(!visible);

  return (
    <>
      <Main>
        {!visible && (
          <Imagen>
            <img src={src} draggable={false} />
          </Imagen>
        )}

        <Informacion>
          <Enlace href={href} target="_blank">
            <img src={LinkExterno} alt="Enlace externo" />
          </Enlace>

          {visible ? (
            <Descripcion>
              <p>{desc}</p>
            </Descripcion>
          ) : (
            <Contenedor>
              <Nombre>{name}</Nombre>

              <Habilidades>
                {skills.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </Habilidades>
            </Contenedor>
          )}
          <Button type="button" onClick={cambiarVisible}>
            {visible ? "Volver" : "Leer mas"}
          </Button>
        </Informacion>
      </Main>
    </>
  );
};

export default MapRenderProyecto;
