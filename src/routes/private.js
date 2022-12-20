import { Main } from '../components/Main'
import { ProfilePage } from '../pages/ProfilePage'
import { LogoutPage } from '../pages/LogoutPage'
import { CarritoPage } from '../pages/CarritoPage'

export const PRIVATE_ROUTES = [
    {
        path: "/",
        title: "Home",
        element: <Main />,
    },
    {
        path: "/profile",
        title: "Profile",
        element: <ProfilePage />,
    },
    {
        path: "/logout",
        title: "Logout",
        element: <LogoutPage />,
    },
    {
        path: "/carrito",
        title: "Carrito",
        element: <CarritoPage />,
    },
]