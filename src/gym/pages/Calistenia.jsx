import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

export const Calistenia = () => {
  const { calisteniaData } = useContext(DataContext);
  console.log(calisteniaData)
  const navigate = useNavigate();
  return (
    <>
      <h1>Equipo para calistenia</h1>
      <button
        onClick={() => navigate('/')}
        className="btn btn-primary float-end"
      >
        Go Home
      </button>
      {calisteniaData.map((equipo) => {
        return (
          <div key={equipo.id} className="card m-3" style={{maxWidth:'640px'}}>
          <div className="row g-0">
            <div id='zoom' className="col-md-4 border border-secondary">
              <img src={equipo.imagen}  className="img-fluid rounded-start " alt="imagenEquipo" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{equipo.nombre}</h5>
                <p className="card-text">
                  {equipo.descripcion}
                </p>
                <p className="card-text">
                  <small className="text-muted">${equipo.precio} MXN</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        );
      })}
    </>
  );
};
