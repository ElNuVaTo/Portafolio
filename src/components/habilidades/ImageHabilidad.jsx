import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  background-color: #d3e2fa;
  width: 370px;
  height: 80px;
  gap: 10;
  border-radius: 5px;
  b {
    color: black;
  }
`;
const Contenedor_Image = styled.div`
  display: flex;
  gap: 10px;
`;
const Image = styled.div`
  width: 55px;
  height: 55px;

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
        <b>{name}</b>
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
