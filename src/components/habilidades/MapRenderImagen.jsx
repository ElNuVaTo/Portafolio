import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
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

const MapRenderImagen = ({ titulo, stackMap }) => {
  return (
    <>
      <Contenedor>
        <b>{titulo}</b>
        <Contenedor_Image>
          {stackMap.map((item, key) => (
            <Image key={key}>
              <img src={item} alt="" />
            </Image>
          ))}
        </Contenedor_Image>
      </Contenedor>
    </>
  );
};

export default MapRenderImagen;
