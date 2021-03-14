import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-wrapper orange darken-3">
            <div className="container">
            <Link to='/' className="brand-logo"> BookSearcher </Link>
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