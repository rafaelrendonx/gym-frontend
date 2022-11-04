import { Navbar } from '../components/Navbar';
import Fondo from '../../assets/images/fondo.jpg';

export const GymPage = () => {
  return (
    <>
      <h1 className="text-center">Zona GYM</h1>
      <Navbar />
      <img className="container d-flex" src={Fondo} alt="" />
    </>
  );
};
