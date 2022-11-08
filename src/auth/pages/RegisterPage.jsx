import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegisterPage = () => {
  const formValues = {
    nombre: '',
    email: '',
    password: '',
  };
  const { formState, onInputChange, email, password, nombre } =
    useForm(formValues);
  const [registeredUser, setRegisteredUser] = useState({});
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    setRegisteredUser([formState]);
    console.log(registeredUser);
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
                  <h1 className="mb-5">Registrar usuario</h1>
                  <div className="form-outline mb-4">
                    <input
                      placeholder="Nombre completo"
                      name="nombre"
                      className="form-control form-control-lg"
                      type="text"
                      onChange={onInputChange}
                      value={nombre}
                    />
                  </div>

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
                    Registrarme
                  </button>
                </form>
                <span className="">
                  ¿Ya tienes una cuenta?
                  <button
                    onClick={() => navigate('/auth/login')}
                    className="btn btn-link"
                  >
                    Ingresa con tu usuario
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
