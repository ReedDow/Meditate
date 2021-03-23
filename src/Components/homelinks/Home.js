import React from 'react';
import enso from '../../enso.png'
import './Home.css'

function Home() {
    return (
        <div>
            <p className="Home-header">
                <header>Meditate</header>
                <img src={enso} className="Home-logo" alt="logo" />
            </p>
        </div>
    );
}
export default Home;