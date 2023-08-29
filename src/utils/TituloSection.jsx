import styled from "styled-components";

const Titulo = styled.h2`
  position: relative;
  width: max-content;
  padding: 6px 100px 6px 0;
  color: white;
  ::after {
    content: "";
    position: absolute;
    background-color: #343761;
    height: 5px;
    border-radius: 30px;
    width: 100%;
    bottom: 0;
    left: 0;
  }
`;

const TituloSection = ({ titulo }) => {
  return (
    <>
      <Titulo>{titulo}</Titulo>
    </>
  );
};

export default TituloSection;
