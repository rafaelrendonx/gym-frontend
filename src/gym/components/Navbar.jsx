import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const navigateTo = ({ target }) => {
    const { name } = target;
    navigate(name);
  };
  return (
    <>
      <div className="navbar float-start ms-5">
        <button
          onClick={navigateTo}
          className="btn btn-outline-primary m-1"
          name="maquinas"
        >
          Maquinas
        </button>
        <button
          onClick={navigateTo}
          className="btn btn-outline-primary m-1"
          name="calistenia"
        >
          Calistenia
        </button>
        <button
          onClick={navigateTo}
          className="btn btn-outline-primary m-1"
          name="pesas"
        >
          Pesas
        </button>
      </div>
      <div className="navbar float-end ms-5">
        <button
          name="auth/login"
          className="btn btn-outline-danger me-3"
          onClick={navigateTo}
        >
          Login
        </button>
        <button
          name="auth/registro"
          className="btn btn-outline-danger me-3"
          onClick={navigateTo}
        >
          Crear usuario
        </button>
      </div>
    </>
  );
};