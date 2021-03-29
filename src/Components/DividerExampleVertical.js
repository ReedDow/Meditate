import React from 'react'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'
import ListExampleBasic from './ListExampleBasic';

let DividerExampleVertical = () => (
  <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column>
        <p>
        <ListExampleBasic/>
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
      </Grid.Column>
    </Grid>

    <Divider vertical>And</Divider>
  </Segment>
)

export default DividerExampleVertical
