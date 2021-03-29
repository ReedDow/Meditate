import './App.css';
import React from 'react';
// import routes from './routes'
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Header/Navbar'
import Video from './Components/videolinks/Video';
import Home from './Components/homelinks/Home';
import Parallax from './Components/parallax/parallaxView'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Home/>
      <Video/>
      {/* <Parallax/> */}
      

    </div>
    </BrowserRouter>
  );
}

export default App;
