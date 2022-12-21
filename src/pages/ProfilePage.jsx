import { useContext } from 'react';
import { UserContext } from '../context/UserContext'

export const ProfilePage = () => {

  const { nombre } = useContext(UserContext);

  return (

    <div className='equipo row justify-content-center m-4'>

      <h2 className='text-center mt-4'>Mi Perfil</h2>

      <p className='text-center mt-4'>Bienvenido, {nombre}</p>
      

    </div>

  );
};