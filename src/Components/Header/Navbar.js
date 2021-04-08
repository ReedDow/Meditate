import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import enso from '../../assets/enso.png'
import './Navbar.css' 

export default class MenuExampleLabeledIcons extends Component {
  state = { activeItem: 'audio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled'
            className = 'navbar'>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <img src={enso} 
            className = 'header-logo'/>
        </Menu.Item>  
        <Menu.Item
          name='headphones'
          active={activeItem === 'headphones'}
          onClick={this.handleItemClick}
        >
          <Icon name='headphones' />
          Audio
        </Menu.Item>

        <Menu.Item
          name='video'
          active={activeItem === 'video'}
          onClick={this.handleItemClick}
        >
          <Icon name='video play' />
          Video
        </Menu.Item>

        <Menu.Item
          name='text'
          active={activeItem === 'text'}
          onClick={this.handleItemClick}
        >
          <Icon name='file pdf' />
          Text
        </Menu.Item>

        
      </Menu>
    )
  }
}



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