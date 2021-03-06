import { useState, useEffect, useRef } from 'react'
import Deep_Breath from './Deep breath meditation.m4a'
import LegendOfCenturies from './Suncrown.mp3'
import Slider from './slider/Slider'
import ControlPanel from './controls/ControlPanel'
import Backdrop from './controls/backdrop'
import './audioStyle.css'
import { Grid, Menu, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-scroll'

const tracks = [
  {
    title: 'Legend of Centuries',
    author: 'Suncrown',
    audioSrc: LegendOfCenturies,
    color: '#556B2F',
  },
  {
    title: 'Deep Breath Meditation',
    author: 'Reed Dow',
    audioSrc: Deep_Breath,
    color: '#D2691E',
  },
]

function AudioPlayer() {
  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [trackIndex, setTrackIndex] = useState(0);
  const {title, author, audioSrc, color} = tracks[trackIndex]
  const audioRef = useRef()

  const onClick = e => {{
    setTrackIndex(e.currentTarget.id);
    setPercentage(0)
    const audio = audioRef.current
    audio.volume = 0.1
    setIsPlaying(false)
  }
    return(
      <Link to="audio-player" spy={true} smooth={true}></Link>
    )
  }

  const onChange = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  return (
    <div>
      <Grid textAlign='center' doubling container stackable columns={5}>
    <Grid.Row>
      <Grid.Column>
        <Menu fluid vertical style = {{backgroundColor: '#F5F5F5'}}>
          <Menu.Item className='header'>Body Scan
          </Menu.Item>
          <Menu.Item>Energizing Light</Menu.Item>
          <Menu.Item>Calming Rain</Menu.Item>
          <Menu.Item>Muscle release</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical style = {{backgroundColor: '#F5F5F5'}}>
          <Menu.Item className='header'>Guided Imagery</Menu.Item>
          <Menu.Item>Forest Walk</Menu.Item>
          <Menu.Item>Ocean Relaxation</Menu.Item>
          <Menu.Item>City Stroll</Menu.Item>
          <Menu.Item>Desert Breeze</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical style = {{backgroundColor: '#F5F5F5'}}>
          <Menu.Item className='header'>Meditation with Purpose</Menu.Item>
          <Menu.Item>Deep Sleep
          </Menu.Item>
          
          <Menu.Item id = {0} onClick={onClick} >
          <Link to="audio-player" spy={true} smooth={true} className='menu-item'>
            SunCrown
            </Link>
          </Menu.Item>
         
          <Menu.Item>Motivation</Menu.Item>
          <Menu.Item>Acceptance</Menu.Item>
          <Menu.Item>Gratitude</Menu.Item>
          <Menu.Item>Compassion</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical style = {{backgroundColor: '#F5F5F5'}}>
          <Menu.Item className='header'>Focus</Menu.Item>
          <Menu.Item>Breath Awareness</Menu.Item>
          <Menu.Item id = {1} onClick={onClick}> 
          <Link to="audio-player" spy={true} smooth={true} className='menu-item'> 
          Deep Breath
          </Link>
          </Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical style = {{backgroundColor: '#F5F5F5'}}>
          <Menu.Item className='header'>Monkeys</Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  <Divider id = 'audio-player'/>
    <div className='app-container'>
      <h1>Now playing: </h1>
      <h3>{title}</h3>
      <h3>{author}</h3>
      <Slider percentage={percentage} onChange={onChange} />
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        src={audioSrc}
      ></audio>
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />
      <Backdrop className = 'color-backdrop'
      trackIndex={trackIndex}        
      activeColor={color}        
      isPlaying={isPlaying}  
      />
      
    </div>
    <Divider/>
    </div>
  )
}

export default AudioPlayer