import React from 'react';
import enso from '../enso.png'
import './Home.css'

function Home() {
    return (
        <div className="Home">
            <header>
                Meditate
            </header>
            <p className="Home-header">
                <img src={enso} className="Home-logo" alt="logo" />
            </p>
        </div>
    );
}
export default Home;