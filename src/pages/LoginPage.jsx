import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { startLogin } from '../hooks/useAuth';
import { UserContext } from '../context/UserContext'

export const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { saveToken, saveUserId, saveNombre } = useContext(UserContext)
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const { token, userId, nombre, error } = await startLogin(data);

    if (error) {
      setErrorMessage(error);
    } else {
      saveToken(token);
      saveUserId(userId);
      saveNombre(nombre);
      event.target.reset();
    }
  };

  const goToRegister = () => {
    navigate('/auth/register');
  };

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong border border-secondary mb-5 text-bg-dark">

                <form onSubmit={onSubmit} className="d-flex flex-column mb-3 align-items-center mt-5">
                  <h1 className="mb-5">Ingresa tu usuario</h1>
                  <div className="form-outline mb-4">
                    <input
                      placeholder="Correo@hotmail.com"
                      name="correo"
                      className="form-control form-control-lg"
                      type="text"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      placeholder="Contraseña"
                      name="password"
                      className="form-control form-control-lg"
                      type="password"
                    />
                  </div>
                  <button type="submit" className="btn btn-dark w-25 m-4">Login</button>
                </form>

                <div className='text-center'>
                  <p>¿Aún no tienes cuenta?</p>
                  <button onClick={goToRegister} className="btn btn-dark mb-5">Haz click aquí, para registrarte</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
