import React from "react"

import { Link } from "react-router-dom"

import "./navItem.styles.scss"

const NavItem = (props) => { 
    return(
        <li className="nav-item"> 
            <Link to={`${props.navItem.link}`}>
            {props.navItem.name}
            </Link>
        </li> 
    )
}

export default NavItem