import { Calistenia } from '../pages/Calistenia'
import { Maquinas } from '../pages/Maquinas'
import { Pesas } from '../pages/Pesas'

export const EQUIPMENT_ROUTES = [
  {
    path: "/calistenia",
    title: "Calistenia",
    element: <Calistenia />,
  },
  {
    path: "/maquinas",
    title: "Maquinas",
    element: <Maquinas />,
  },
  {
    path: "/pesas",
    title: "Pesas",
    element: <Pesas />,
  },
]