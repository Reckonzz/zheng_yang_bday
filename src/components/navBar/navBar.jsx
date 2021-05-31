import React from "react"

import "./navBar.styles.scss"

import NavItem from "./navItem/navItem"

const NavBar = (props) => { 
    return(
        <nav className="nav-bar">
            <ul>
                {props.navItems.map(navItem => <NavItem navItem={navItem}/>)}
            </ul>
        </nav> 
    )
}

export default NavBar