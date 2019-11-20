import React from 'react';
import {
    NavLink,  
} from 'react-router-dom'
import"bootstrap/dist/css/bootstrap.min.css";



const Navigator =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg -light">
           
                <NavLink className="navbar-brand" to ="/" >Welcome to React Router</NavLink>
                <div className="collapsenavbar-collapse" id ="navbarSupportedContent">
                    <ul className="navbar-navmr-auto">
                        <li className="nav -itemactive">
                            <NavLink className="nav-link" exact to="/"  >Home</NavLink>
                        </li>
                        <li className="nav -item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav -item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul >
                </div>
        </nav>
    )
}

export default Navigator;