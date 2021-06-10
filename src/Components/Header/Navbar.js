import { React, Component } from 'react';
import { Icon, Menu, Input } from 'semantic-ui-react';
import { Link } from 'react-scroll'

import './Navbar.css';

export default class Navbar extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {


    return (
      <nav className='ui container' >
        <Menu icon='labeled' className='ui fixed  transparent menu '>
          <Link to="home-start" spy={true} smooth={true}>
            <Menu.Item
              name='home'
              onClick={this.handleItemClick}>
              <Icon name='home' />
                  Home
                </Menu.Item>
          </Link>
          <Link to="video-start" spy={true} smooth={true}>
            <Menu.Item
              name='video'
              onClick={this.handleItemClick}>
              <Icon name='video play' />
                  Video
                </Menu.Item>
          </Link>
          <Link to="audio-start" spy={true} smooth={true}>
            <Menu.Item name='audio'
              onClick={this.handleItemClick}>
              <Icon name='headphones' />
                Audio
                </Menu.Item>
          </Link>
          <Input className='right item' placeholder='Search...' />
        </Menu>
      </nav>
    )
  }
}



