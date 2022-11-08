import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const LoginPage = () => {
  const formValues = {
    email: '',
    password: '',
  };
  const { formState, onInputChange, email, password } = useForm(formValues);
  const [loggedUser, setLoggedUser] = useState({});
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    setLoggedUser([formState]);
    console.log(loggedUser);
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
                <form
                  onSubmit={onSubmit}
                  className="d-flex flex-column mb-3 align-items-center mt-5"
                >
                  <h1 className="mb-5">Ingresa tu usuario</h1>

                  <div className="form-outline mb-4">
                    <input
                      placeholder="Correo@hotmail.com"
                      name="email"
                      className="form-control form-control-lg"
                      type="text"
                      onChange={onInputChange}
                      value={email}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      placeholder="Contraseña"
                      name="password"
                      className="form-control form-control-lg"
                      type="password"
                      onChange={onInputChange}
                      value={password}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
                <span>
                  ¿Aún no tienes cuenta?
                  <button onClick={goToRegister} className="btn btn-link mt-3">
                    Haz click aquí
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
