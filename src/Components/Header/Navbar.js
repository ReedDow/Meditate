import {React, Component} from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import enso from '../../assets/enso.png';
import home from '../homelinks/Home';
import video from '../videolinks/Video';
import audio from '../audioLinks/Audio';
import './Navbar.css' ;

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

  
    return (
      <div >
      <Menu icon='labeled' className = 'navbar'>
        <Menu.Item 
        name = 'home'
        active={activeItem==='home'}
        onClick={this.handleItemClick}>
          <img src={enso} 
            className = 'header-logo'/>
            
        </Menu.Item>  
        <Menu.Item 
        name='video'
        active={activeItem==='video'}
        onClick={this.handleItemClick}
        >
          <Icon name='video play' />
          Video
        </Menu.Item>

        <Menu.Item name='audio'
        active={activeItem==='audio'}
        onClick={this.handleItemClick}
        >
          <Icon name='headphones' />
          Audio
        </Menu.Item>
      </Menu>
      </div>
    )
  }
}



