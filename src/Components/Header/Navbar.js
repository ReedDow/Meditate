import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import enso from '../../assets/enso.png'
import './Navbar.css' 
import routes from '../../routes'
import {useRoutes, A} from 'hookrouter';

function Navbar(){
  const routeResult = useRoutes(routes);


    return (
      <div >
      <Menu icon='labeled' className = 'navbar'>
        <Menu.Item name = 'home'>
          <A href = '/'>
          <img src={enso} 
            className = 'header-logo'/>
            </A>
        </Menu.Item>  
        <Menu.Item name='video'
        >
          <A href = '/video'>
          <Icon name='video play' />
          Video
          </A>
        </Menu.Item>

        <Menu.Item name='headphones'
        >
          <A href = '/audio'>
          <Icon name='headphones' />
          Audio
          </A>
        </Menu.Item>
      </Menu>
      {routeResult}
      </div>
    )
  }
export default Navbar


// import React from 'react';
// import enso from '../../assets/enso.png'
// import './Navbar.css'
// import { withRouter, Link } from 'react-router-dom';
// import Scroll from "react-scroll";
// const ScrollLink = Scroll.ScrollLink


// function Navbar() {

//     return (
//         <div className="navbar">
//             <img src={enso}
//                 className='header-logo' />
//             <nav>
//                 <Link
//                     className="nav-link"
//                     to="/"
//                     spy={true}
//                     smooth={true}
//                     offset={-70}
//                     duration={500}
//                 >
//                     Home
//                 </Link>

//                 <Link
//                     className="nav-link"
//                     to="/video"
//                     spy={true}
//                     smooth={true}
//                     offset={-70}
//                     duration={500}
//                 >
//                     Videos
//                 </Link>


//                 <Link
//                     className="nav-link"
//                     to="/audio"
//                     spy={true}
//                     smooth={true}
//                     offset={-70}
//                     duration={500}
//                 >
//                     Audio
//                 </Link>


//                 <Link
//                     className="nav-link"
//                     to="/text"
//                     spy={true}
//                     smooth={true}
//                     offset={-70}
//                     duration={500}
//                 >
//                     Text
//                 </Link>
//             </nav>
//         </div>

//     )
// }
// export default withRouter(Navbar)