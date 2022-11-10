import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

export const Maquinas = () => {

  const { maquinasData } = useContext(DataContext);
  
  const navigate = useNavigate();
  return (

    <div className='equipo row justify-content-center m-4'>

      <h2 className='text-center mt-4'>Máquinas</h2>


      <div className="row row-cols-5 justify-content-center align-items-stretch p-4 m-4">
        {maquinasData.map((equipo) => {
          return (

            <div key={equipo.id} className='flip-card p-4 card-border' >
              <div class="flip-card-inner">
                <div className="d-flex flex-column flip-card-front">
                  <img src={equipo.imagen} alt="..." />
                </div>
                <div class="row align-items-center flip-card-back">
                  <h2>{equipo.nombre}</h2>
                  <p>{equipo.descripcion}</p>
                  <p>${equipo.precio} MXN</p>
                </div>
              </div>
            </div>

          );
        })}
      </div>

      <button onClick={() => navigate('/')} className="btn btn-dark w-25 m-4">Go Home</button>


    </div>

  );
};
