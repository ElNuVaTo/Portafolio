import { useState, useEffect } from "react";
import styled from "styled-components";

import ContactoJSON from "../../utils/json/Contacto.json";
import RenderContacto from "./RenderContacto";

const Main = styled.footer`
  background-color: var(--Principal);
  padding: 15px 1%;
  h3 {
    color: white;
  }
`;
const Copyright = styled.p`
  margin-top: 10px;
  color: white;
  text-align: center;
  font-size: 14px !important;
`;
const Contenedor_Contacto = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  gap: 10px;
`;
const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-wrap: wrap;
  gap: 5px;
  padding-left: 5px;
  p,
  a {
    color: white;
  }
`;

const Contacto = () => {
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();

    return setFecha(year);
  }, []);

  return (
    <>
      <Main>
        <Contenedor_Contacto>
          <h3>Contacto</h3>
          <Contenedor>
            {ContactoJSON.map((item) => (
              <div key={item.data}>
                <RenderContacto
                  src={item.src}
                  data={item.data}
                  href={item.href}
                />
              </div>
            ))}
          </Contenedor>
        </Contenedor_Contacto>
        <Copyright>Copyright © {fecha} Angelo. All Rights Reserved</Copyright>
      </Main>
    </>
  );
};

export default Contacto;
