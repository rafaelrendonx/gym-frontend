import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { startLogin } from '../hooks/useAuth';
import { UserContext } from '../context/UserContext'

export const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { saveToken, saveUserId } = useContext(UserContext)
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data)
    const { token, userId, error } = await startLogin(data);

    if (error) {
      setErrorMessage(error);
    } else {
      saveToken(token);
      saveUserId(userId);
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
              <div className="card shadow-2-strong border border-secondary mb-5">

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
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>

                <span>
                  ¿Aún no tienes cuenta?
                  <button onClick={goToRegister} className="btn btn-link mt-3">Haz click aquí</button>
                </span>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
