import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { UserContext } from '../context/UserContext';
import { CarritoContext } from '../context/CarritoContext';

export const Pesas = () => {

  const { token } = useContext(UserContext);
  const { pesasData } = useContext(DataContext);
  const { agregarACarrito } = useContext(CarritoContext)
  const [first, setFirst] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setFirst(!first);
    setTimeout(() => {
      setFirst(!!first);
    }, 750);
  };

  return (

    <div className='equipo row justify-content-center p-4 m-4'>

      <h2 className='text-center mt-4'>Pesas</h2>


      <div className="row row-cols-5 justify-content-center align-items-stretch p-4">
        {pesasData.map((equipo) => {
          return (

            <div key={equipo.id} className='flip-card p-4 card-border text-center'>
              <div className="flip-card-inner">
                <div className="d-flex flex-column flip-card-front">
                  <img src={equipo.imagen} alt="..." />
                </div>
                <div className="row align-items-center flip-card-back">
                  <h2>{equipo.nombre}</h2>
                  <p>{equipo.descripcion}</p>
                  <p>${equipo.precio} MXN</p>
                  <button className="btn btn-dark" onClick={function (event) {
                    agregarACarrito({
                      nombre: equipo.nombre,
                      precio: equipo.precio,
                      id: equipo.id,
                    });
                    handleClick()
                  }}>Comprar</button>
                  <div className={`mt-3 text-center alert alert-dark ${first ? '' : 'd-none'}`}>¡Equipo agregado al Carrito!</div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      <div className='equipo row justify-content-center pt-5 mt-5'>
        {token
          ?
          <>
            <button onClick={() => navigate('/')} className="btn btn-dark w-25 m-4">Ir a Home</button>
            <button onClick={() => navigate('/carrito')} className="btn btn-dark w-25 m-4">Ir a Carrito</button>
          </>
          :
          <button onClick={() => navigate('/')} className="btn btn-dark w-25 m-4">Ir a Home</button>
        }
      </div>

    </div>

  );
};
