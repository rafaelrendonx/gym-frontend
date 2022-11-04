import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { GymRoutes } from "../gym/routes/GymRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<GymRoutes/>}/>
        <Route path="/auth/*" element={<AuthRoutes/>}/>
    </Routes>
  )
}