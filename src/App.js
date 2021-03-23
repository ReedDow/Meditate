import './App.css';
import React from 'react';
import routes from './routes'
import Navbar from './Components/Header/Navbar'
import Video from './Components/videolinks/Video';
import Home from './Components/homelinks/Home';
import Parallax from './Components/parallax/parallaxView'


function App() {
  return (
    <div className="App">
      <Navbar/>
      {routes}
    </div>
  );
}

export default App;
