import Intro from './Intro/Intro';
import Colecciones from './Coleccion/Colecciones';
import Contacto from './Contacto/Contacto';
import Loading from './PageLoading/Loading';

const Home = () => {
  return (
    <>
      <Loading />
      <Intro />
      <Colecciones />
      <Contacto />
    </>
  );
}

export default Home;