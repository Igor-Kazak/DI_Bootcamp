import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
            <Link to='/' className="brand-logo"> MovieSearcher </Link>
                {/* <ul className="right">
                    <li>
                        <NavLink to='/' > Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' > About </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacts' > Contacts </NavLink>
                    </li>
                </ul> */}
            </div>
        </nav>
    )
}

export default NavBar;