import styled from "styled-components";
import { useRef } from "react";
import { motion } from "framer-motion";

import ProyectosJSON from "../../utils/json/Proyectos.json";
import MapRenderProyecto from "./MapRenderProyecto";
import TituloSection from "../../utils/TituloSection";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 1300px;
  margin: auto;
`;
const ContenedorDrag = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  margin: 20px auto;
  width: 100%;

`;
const Draggeable = styled(motion.ul)`
  display: flex;
  width: max-content;
  gap: 20px;
  padding: 0 13px;
  li {
    width: 500px;
    list-style: none;
  }
`;
const Proyectos = () => {
  const dragRef = useRef();

  return (
    <>
      <Main>
        <TituloSection titulo="Proyectos" />

        <ContenedorDrag ref={dragRef}>
          <Draggeable drag="x" dragElastic={false} dragConstraints={dragRef}>
            {ProyectosJSON.map((item, key) => (
              <li key={key}>
                <MapRenderProyecto
                  name={item.name}
                  src={item.src}
                  href={item.href}
                  skills={item.skills}
                  desc={item.desc}
                />
              </li>
            ))}
          </Draggeable>
        </ContenedorDrag>
      </Main>
    </>
  );
};

export default Proyectos;
