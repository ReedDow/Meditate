import React from 'react';
import enso from '../../enso.png'
import backgroundVideo from '../../backgroundVideo.mp4'
import scrollDown from '../../scrollDown.png'
import './Home.css'

function Home() {
    return (
        <div>
            <video autoPlay loop muted id='video' >
                <source src={backgroundVideo} type='video/mp4' />
            </video>
            <p className="Home-header">
                
                <img src={enso} className="Home-logo" alt="logo" />
                <img src={scrollDown} className = 'scroll-logo' alt='scrollDown'/>
            </p>
        </div>
    );
}
export default Home;