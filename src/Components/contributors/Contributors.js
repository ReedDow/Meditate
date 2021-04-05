import _ from 'lodash'
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import './Contributors.css'

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'violet',
  'purple'
]

const Contributors = () => (
    <div>
        <header className = 'contributors-title'>
            Contributors
        </header>
        <Grid padded>
    {colors.map((color) => (
      <Grid.Row color={color} key={color}>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    ))}
  </Grid>
  <Grid columns={3} divided stackable>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
    
  </Grid>
  </div>
)

export default Contributors