import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem ,{NavItemDropDown} from '../../components/NavItem/NavItem'
import { Link } from 'react-router-dom'
import{FaLongArrowAltLeft} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container">
            <a href="#" className="navbar-brand ">
                <span className='nav-arrow-left' onClick={() => navigate(-1)}><FaLongArrowAltLeft/></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto nav-tabs">
                    <li className="nav-item">
                       {/* <a href="/#" className="nav-link ">Home</a>*/}
                       <Link to="/" className="nav-link" active aria-current="true">Home</Link>
                      {/*<Link to="/profile" className="nav-link">Profile</Link> */}
                       
                        </li>
                       
                        <Link to="/team"  className="nav-link" >Pokémon Team</Link>
                    
                    <li className="nav-item dropdown">
                        <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                        <ul className="dropdown-menu">
                            <li><a href="/#" className="dropdown-item">Learn Bootstrap</a></li>
                            <li><a href="/#" className="dropdown-item">Where to go next</a></li>
                        </ul>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header