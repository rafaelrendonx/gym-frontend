import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/main.css'
import Logo from '../assets/images/logo.jpg'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../routes";


export const Nav = () => {
    const { token } = useContext(UserContext);
    const navigate = useNavigate();
    const navigateTo = ({ target }) => {
        const { name } = target;
        navigate(name);
    };

    return (
        <>
            <nav className="navbar navbar-dark custom-color">
                <div className="container-fluid">
                    <div>
                        <a href='foo' className="navbar-brand">
                            <img src={Logo} alt="Logo" width="50" height="50" className="d-inline-block logo" />
                            Gym Zone </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Gym Zone</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                                {(token ? PRIVATE_ROUTES : PUBLIC_ROUTES)
                                    .filter((route) => route.title)
                                    .map((route, index) => (
                                        <a className="nav-link" onClick={navigateTo} name={route.path} key={index}>{route.title}</a>
                                    ))}

                                <li className="nav-item dropdown">
                                    <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Venta de Equipo
                                    </p>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item" onClick={navigateTo} name="maquinas">Máquinas</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" onClick={navigateTo} name="Calistenia">Calistenia</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" onClick={navigateTo} name="pesas">Pesas</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
};