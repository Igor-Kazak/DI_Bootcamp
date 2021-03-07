import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div style={{background:"grey"}}>
            <Link to='/' style={{color:"yellow", margin:"10px"}}> Home </Link>
            <Link to='/about' style={{color:"yellow", margin:"10px"}}> About </Link>
            <Link to='/contacts' style={{color:"yellow", margin:"10px"}}> Contacts </Link>
        </div>
    )
}

export default NavBar;