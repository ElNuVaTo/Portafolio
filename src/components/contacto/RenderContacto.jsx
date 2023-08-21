import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: auto;

  a,
  p {
    color: black;
    position: relative;
    top: 0.5px;
  }
`;
const Image = styled.div`
  height: 25px;
  width: 25px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RenderContacto = ({ src, data, href }) => {
  return (
    <>
      <Contenedor>
        <Image>
          <img src={src} alt="" />
        </Image>

        {href !== "" ? (
          <a href={href} target="_blank" rel="noreferrer">
            {data}
          </a>
        ) : (
          <p>{data}</p>
        )}
      </Contenedor>
    </>
  );
};

export default RenderContacto;
