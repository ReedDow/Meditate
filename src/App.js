import './App.css';
import React from'react';
import Navbar from './Components/Header/Navbar'
import Video from './Components/videolinks/Video';
import Home from './Components/homelinks/Home';
import Audio from './Components/audioLinks/Audio';



function App() {
  return (
    <div className = 'app'>
    <Navbar/>
    <Home/>
    <Video/>

    </div>
  )
}

export default App;
