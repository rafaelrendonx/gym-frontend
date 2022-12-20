import { useContext } from "react";
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from "../context/UserContext";
import { Nav } from '../components/Nav';
import { PRIVATE_ROUTES, PUBLIC_ROUTES, EQUIPMENT_ROUTES } from "../routes";

export const AppRouter = () => {
  const { token } = useContext(UserContext);

  return (
    <>
      <Nav />
      
      <Routes>
        {(!token ? PUBLIC_ROUTES : PRIVATE_ROUTES).map((route, index) => (
          <Route key={index} {...route} />
        ))}
        {EQUIPMENT_ROUTES.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        {token !== undefined && (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </>
  )
}