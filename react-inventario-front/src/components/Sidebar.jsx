import { Logolight } from "../entryfiles/imagePath"
import { Link } from "react-router-dom"

const Sidebar = () =>{
    return(
        <>
        <div className="navbar-brand-box">
                            <Link to="/" className="logo">
                                <img src={Logolight} />
                            </Link>
        </div>
        <div id="sidebar-menu">

            <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title">Menu</li>

                <li>
                    <Link to="/categoria" className="waves-effect">
                        <i className='bx bx-home-smile'></i>
                        <span>Categorias</span>
                    </Link>
                </li>

                <li>
                    <Link to="/laboratorio" className="waves-effect">
                        <i className='bx bx-home-smile'></i>
                        <span>Laboratorios</span>
                    </Link>
                </li>

                <li>
                    <Link to="/equipo" className="waves-effect">
                        <i className='bx bx-home-smile'></i>
                        <span>Equipos</span>
                    </Link>
                </li>

                <li>
                    <Link to="/movimiento" className="waves-effect">
                        <i className='bx bx-home-smile'></i>
                        <span>Movimientos</span>
                    </Link>
                </li>

            </ul>
        </div >
        </>
        
    )
}

export default Sidebar