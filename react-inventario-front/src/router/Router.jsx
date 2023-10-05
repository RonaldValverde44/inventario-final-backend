import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home"
import Login from  "../pages/Login"
import Categoria from "../pages/Categoria"
import Laboratorio from "../pages/Laboratorio"
import Equipo from "../pages/Equipo"
import Movimiento from "../pages/Movimiento"

const router = createBrowserRouter([
{
    path:"/",
    element:<Home/>,
},
{
    path:"/login",
    element:<Login/>
},
{
    path:"/categoria",
    element:<Categoria/>
},
{
    path:"/laboratorio",
    element:<Laboratorio/>
},
{
    path:"/equipo",
    element:<Equipo/>
},
{
    path:"/movimiento",
    element:<Movimiento/>
}
])

export default router