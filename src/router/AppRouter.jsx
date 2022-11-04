import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { GymPage } from "../gym/pages/GymPage"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<GymPage/>}/>
        <Route path="/auth/*" element={<AuthRoutes/>}/>
    </Routes>
  )
}