import React from 'react'
import{FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const HeaderOfPokemon = () => {
  return (
    <div>
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container">
            <ul>
            <li className="nav-item">
                       
                        <a href="#" className="bar-icon"> Hiiiii<FaBars/></a>
                       
                        </li>
            </ul>
        </div>
        </div>

    </div>
  )
}

export default HeaderOfPokemon