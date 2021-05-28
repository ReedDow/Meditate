import { useState, useEffect, useRef } from 'react'
import Deep_Breath from './Deep breath meditation.m4a'
import LegendOfCenturies from './Suncrown.mp3'
import Slider from './slider/Slider'
import ControlPanel from './controls/ControlPanel'
import './audioStyle.css'
import { Grid, Menu, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const tracks = [
  {
    title: 'Legend of Centuries',
    author: 'Suncrown',
    audioSrc: LegendOfCenturies,
  },
  {
    title: 'Deep Breath Meditation',
    author: 'Reed Dow',
    audioSrc: Deep_Breath,
  },
  
]

function AudioPlayer() {
  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [trackIndex, setTrackIndex] = useState(0);
  // const [song, setSong] = useState('')
  const {title, author, audioSrc} = tracks[trackIndex]
  const audioRef = useRef()

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
          <Menu.Item>Deep Sleep</Menu.Item>
          <Menu.Item>Confidence</Menu.Item>
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
          <Menu.Item>Deep Breath</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical style = {{backgroundColor: '#F5F5F5'}}>
          <Menu.Item className='header'>Monkeys</Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  <Divider/>
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
        src={Deep_Breath}
      ></audio>
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />
      
    </div>
    <Divider/>
    </div>
  )
}

export default AudioPlayer