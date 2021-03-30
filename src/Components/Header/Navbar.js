import React from 'react';
import enso from '../../assets/enso.png'
import './Navbar.css'
import { withRouter, Link } from 'react-router-dom';
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink


function Navbar() {

    return (
        <div className="navbar">
            <img src={enso}
                className='header-logo' />
               

            <nav>

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