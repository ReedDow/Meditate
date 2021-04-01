import React from 'react'
import { Grid, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const GridExampleTextAlignmentCenter = () => (
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
  

)

export default GridExampleTextAlignmentCenter

