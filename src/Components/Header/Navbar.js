import React from 'react';
import enso from '../../enso.png'
import './Navbar.css'
import { withRouter, Link } from 'react-router-dom';
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink


function Navbar() {

    return (
        <div className="navbar">Navbar
            <img src={enso}
                className='header-logo' />

            <nav>
                <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='nav-link'
                    activeClass='some-active-class'
                >
                    Meditate
            </Link>

                <Link
                    className="nav-link"
                    to="/Home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Home
                </Link>

                <Link
                    className="nav-link"
                    to="Video"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Videos
                </Link>


                <Link
                    className="nav-link"
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Audio
                </Link>


                <Link
                    className="nav-link"
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Text
                </Link>
            </nav>
        </div>

    )
}
export default withRouter(Navbar)