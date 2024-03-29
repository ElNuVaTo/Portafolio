import Sobre from "../components/sobre-mi/Sobre";
import Proyectos from "../components/proyectos/Proyectos";
import Stack from "../components/habilidades/Stack";
import Contacto from "../components/contacto/Contacto";
import Certificados from "../components/certificados/Certificados";

const Inicio = () => {
  return (
    <>
      <Sobre />
      <Proyectos />
      <Certificados />
      <Stack />
      <Contacto />
    </>
  );
};

export default Inicio;
