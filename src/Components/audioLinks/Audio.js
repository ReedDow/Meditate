import React from 'react';
import { Grid, Image, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import AudioGrid from './AudioGrid'
import AudioPlayer from './audioPlayerDocs/audioPlayer'
import './Audio.css';
import mandala from '../../assets/mandala.png'


function Audio() {
    return (
        <div className='audio'>
            < header className='audio-title'>
                Audio
            </header>
            <section className='links'>
                <AudioGrid />
                <Divider className = 'divider'/>
                <AudioPlayer />
                <Divider className = 'divider'/>
                <Grid className = 
                'paragraph'
                columns={2} padded='horizontally' stackable>
                    <Grid.Column >
                    <Image src = {mandala}/>
                    </Grid.Column>
                    <Grid.Column>
                        <p className = 'quote'>
                            
“If you realize that all things change, there is nothing you will try to hold on to. If you are not afraid of dying, there is nothing you cannot achieve.”
― Lao Tzu, Tao Te Ching 
                        </p>
                        
                    </Grid.Column>
                    
                </Grid>
                <Divider className = 'divider'/>
            </section>
        </div>
    )
}
export default Audio;