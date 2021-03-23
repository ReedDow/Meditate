import React from 'react';
import './Navbar.css'
import {Link, withRouter} from 'react-router-dom';
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink


function Navbar() {
    
    return (
        <div className="navbar">Navbar
            <ScrollLink
                to="/"
                spy={true}
                smooth={true}
                duration={500}
                className='nav-link'
                activeClass='some-active-class'
            >
                Meditate
            </ScrollLink>

            <ScrollLink
                className="nav-link"
                to="/Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Home
                </ScrollLink>

            <ScrollLink
                className="nav-link"
                to="Video"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Videos
                </ScrollLink>


            <ScrollLink
                className="nav-link"
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Audio
                </ScrollLink>


            <ScrollLink
                className="nav-link"
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Text
                </ScrollLink>
        </div>

    )
}
export default Navbar