import './Header.css'

import { Link } from 'react-router-dom'
import{FaLongArrowAltLeft} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container">
            <a href="#" className="navbar-brand ">
                <span className='nav-arrow' onClick={() => navigate(-1)}><FaLongArrowAltLeft/></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto nav-tabs">
                    <li className="nav-item">
                       
                       <Link to="/" className="nav-link" >Home</Link>
                      
                        </li>
                       
                        <Link to="/team"  className="nav-link" > Team</Link>
                    
                   
                    
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header