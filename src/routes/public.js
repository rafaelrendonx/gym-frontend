import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Main } from '../components/Main'

export const PUBLIC_ROUTES = [
  {
    path: "/",
    title: "Public Home",
    element: <Main />,
  },

  {
    path: "/login",
    title: "Login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    title: "Register",
    element: <RegisterPage />,
  },
]