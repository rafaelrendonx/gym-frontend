import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar float-start ms-5">
        <button
          onClick={({ target }) => navigate(target.name)}
          className="btn btn-outline-primary m-1"
          name="maquinas"
        >
          Maquinas
        </button>
        <button
          onClick={({ target }) => navigate(target.name)}
          className="btn btn-outline-primary m-1"
          name="calistenia"
        >
          Calistenia
        </button>
        <button
          onClick={({ target }) => navigate(target.name)}
          className="btn btn-outline-primary m-1"
          name="pesas"
        >
          Pesas
        </button>
      </div>
      <div className='navbar float-end ms-5'>
        <button className='btn btn-outline-danger m-1'>Login</button>
        <button className='btn btn-outline-danger m-1'>Crear usuario</button>
      </div>
    </>
  );
};