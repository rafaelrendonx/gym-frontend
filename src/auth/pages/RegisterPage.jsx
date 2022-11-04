import { useState } from "react";
import { useForm } from "../../hooks/useForm";

export const RegisterPage = () => {
  const formValues = {
    nombre: '',
    email: '',
    password: '',
  };
  const { formState, onInputChange, email, password , nombre} = useForm(formValues);
  const [registeredUser, setRegisteredUser] = useState({})

  const onSubmit = (event) => {
    event.preventDefault()
    setRegisteredUser([
      formState
    ])
    console.log(registeredUser)
  }
  return (
    <>
      <h1>Register Page</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <p>Nombre</p>
        <input
          placeholder="Nombre completo"
          name="nombre"
          className="form-control mb-5 w-25 "
          type="text"
          onChange={onInputChange}
          value={nombre}
        />
        <p>Email</p>
        <input
          placeholder="Correo@hotmail.com"
          name="email"
          className="form-control mb-5 w-25 "
          type="text"
          onChange={onInputChange}
          value={email}

        />
        <p>Contraseña</p>
        <input
          placeholder="Contraseña"
          name="password"
          className="form-control mb-5 w-25 "
          type="password"
          onChange={onInputChange}
          value={password}

        />
        <button type="submit" className="btn btn-primary">
          Registrarme
        </button>
      </form>
    </>
  );
};
