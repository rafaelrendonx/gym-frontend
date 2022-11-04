import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const LoginPage = () => {
  const formValues = {
    email: '',
    password: '',
  };
  const { formState, onInputChange, email, password } = useForm(formValues);
  const [loggedUser, setLoggedUser] = useState({})

  const onSubmit = (event) => {
    event.preventDefault()
    setLoggedUser([
      formState
    ])
    console.log(loggedUser)
  }

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <form onSubmit={onSubmit}>
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
          Login
        </button>
      </form>
    </>
  );
};
