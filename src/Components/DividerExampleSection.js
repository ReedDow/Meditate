import React from 'react'
import ListExampleBasic from './ListExampleBasic';
import { Grid, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const GridExampleTextAlignmentCenter = () => (
  <Grid textAlign='center' doubling container stackable columns={5}>
    <Grid.Row>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Body Scan</Menu.Item>
          <Menu.Item>Energizing Light</Menu.Item>
          <Menu.Item>Calming Rain</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Guided Imagery</Menu.Item>
          <Menu.Item>Forest Walk</Menu.Item>
          <Menu.Item>Ocean Relaxation</Menu.Item>
          <Menu.Item>City Stroll</Menu.Item>
          <Menu.Item>Desert Breeze</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Monkeys</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Monkeys</Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'>Monkeys</Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleTextAlignmentCenter

