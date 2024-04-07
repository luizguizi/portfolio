import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
    <div className="container">
    <div className="content">
        <div className="logo">
            <NavLink to={'/'}>
            <h3>FrontEnd</h3>
            <p>Developer</p>
            </NavLink>
        </div>
        <div className="menu">
            <ul>
                <li><NavLink to={'/'}>Início</NavLink></li>
                <li><NavLink to={'/about'}>Sobre</NavLink></li>
                <li><NavLink to={'/skills'}>Skills</NavLink></li>
                <li><NavLink to={'/portfolio'}>Portfólio</NavLink></li>
                <li><NavLink to={'/contato'}>Contato</NavLink></li>
            </ul>
        </div>
        </div>
    </div>
    </div>
  )
}

export default NavBar