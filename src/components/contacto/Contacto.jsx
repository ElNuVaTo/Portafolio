import styled from "styled-components";

import Telefono from "../../assets/icons/Telefono.svg";
import Email from "../../assets/icons/Email.svg";
import Linkedin from "../../assets/icons/Linkedin.svg";
import GitHub from "../../assets/icons/GitHub.svg";

const Contenedor = styled.div``;
const Contenedor_Contacto = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 20px auto;
  gap: 20px 0;
  padding-bottom: 100px;
`;
const Data = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  max-width: 300px;
  background-color: var(--Secundario);
  border-radius: 5px;
  padding: 5px 10px;
  gap: 5px;
  p {
    color: black;
    font-size: 15px;
  }
  a {
    color: black;
    text-decoration: none;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
const DataLink = styled.a`
  display: flex;
  background-color: var(--Secundario);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 8px;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (min-width: 450px) {
    flex-direction: row;
    justify-content: space-evenly;
    margin: auto;
  }
`;
const Contenedor_Iconos = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const Contacto = () => {
  return (
    <>
      <Contenedor>
        <div className="SubTitulo">
          <h2>Contacto</h2>
        </div>

        <Contenedor_Contacto>
          <Div>
            <Data>
              <img src={Telefono} alt="" />
              <p>+56 9 7823 4940</p>
            </Data>

            <Data>
              <img src={Email} alt="" />
              <p>angelo.a.developer@gmail.com</p>
            </Data>
          </Div>

          <Contenedor_Iconos>
            <DataLink href="https://www.linkedin.com/in/front-end-angelo/">
              <img src={Linkedin} alt="" />
            </DataLink>
            <DataLink href="https://github.com/ElNuVaTo">
              <img src={GitHub} alt="" />
            </DataLink>
          </Contenedor_Iconos>
        </Contenedor_Contacto>
      </Contenedor>
    </>
  );
};

export default Contacto;
