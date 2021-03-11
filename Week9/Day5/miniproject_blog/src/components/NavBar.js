import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
            <Link to='/' className="brand-logo"> React&Redux </Link>
                <ul className="right">
                    <li>
                        <NavLink to='/' > Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' > About </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacts' > Contacts </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;