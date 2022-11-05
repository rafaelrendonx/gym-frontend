import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

export const Pesas = () => {
  const { pesasData } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <>
      <h1>Equipo para pesas</h1>
      <button
        onClick={() => navigate('/')}
        className="btn btn-primary float-end"
      >
        Go Home
      </button>
      {pesasData.map((equipo) => {
        return (
          <div key={equipo.nombre}>
            <h5>Nombre:{equipo.nombre}</h5>
            <p>Descripcion: {equipo.descripcion}</p>
            <p>Id: {equipo.id}</p>
            <p>Precio:${equipo.precio}</p>
            <img src={equipo.imagen} alt="imagenEquipo" />
          </div>
        );
      })}
    </>
  );
};
