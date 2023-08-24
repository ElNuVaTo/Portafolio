import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1e1f3d;
  padding: 10px 5px;
  width: 100%;
  max-width: 350px;
  height: 200px;
  border-radius: 15px;
  margin: auto;
  h3 {
    color: white;
  }
  gap: 10px;
`;
const Contenedor_Image = styled.div`
  display: flex;
  width: 100%;
  max-width: 267px;
  flex-wrap: wrap;
  justify-content: left;
  gap: 15px;
`;
const Image = styled.div`
  width: 55px;
  height: 55px;
  background-color: var(--Secundario);
  border-radius: 5px;
  padding: 3px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ImageHabilidad = ({ name, skills }) => {
  return (
    <>
      <Contenedor>
        <h3>{name}</h3>
        <Contenedor_Image>
          {skills.map((item, key) => (
            <Image key={key}>
              <img src={item} alt="" />
            </Image>
          ))}
        </Contenedor_Image>
      </Contenedor>
    </>
  );
};

export default ImageHabilidad;
