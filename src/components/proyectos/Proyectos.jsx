import styled from "styled-components";

import ProyectosJSON from "../../utils/Proyectos";
import MapRenderProyecto from "./MapRenderProyecto";

const Main = styled.div``;

const Lista = styled.ul`
  display: grid;
  width: 95%;
  margin: 20px auto;
  gap: 50px 0;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  li {
    list-style: none;
  }
`;
const Proyectos = () => {
  console.log(ProyectosJSON);
  return (
    <>
      <Main>
        <div className="SubTitulo">
          <h2>Proyectos</h2>
        </div>

        <Lista>
          {ProyectosJSON.map((item, key) => (
            <li key={key}>
              <MapRenderProyecto
                name={item.name}
                src={item.src}
                href={item.href}
                desc={item.desc}
              />
            </li>
          ))}
        </Lista>
      </Main>
    </>
  );
};

export default Proyectos;
