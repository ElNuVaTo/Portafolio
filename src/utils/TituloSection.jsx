import styled from "styled-components";

const Titulo = styled.h2`
  position: relative;
  width: max-content;
  padding: 6px 80px 6px 0;
  font-size: 26px;
  ::after {
    content: "";
    position: absolute;
    background-color: #343761;
    height: 3px;
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
