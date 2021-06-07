import React, { useState } from 'react';
import { Grid, Image, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import AudioPlayer from './audioPlayerDocs/audioPlayer'
import './Audio.css';
import mandala from '../../assets/mandala.png'


function Audio() {
    return (
        <div id='audio-start'>
            < header className='audio-title'>
                Audio
            </header>
            <section className='links'>
                <AudioPlayer />
                <Grid className=
                    'paragraph'
                    columns={2} padded='horizontally' stackable>
                    <Grid.Column >
                        <Image src={mandala} />
                    </Grid.Column>
                    <Grid.Column>
                        <p className='quote'>
                            “With every breath, the old moment is lost; a new moment arrives. We exhale and we let go of the old moment. It is lost to us. In doing so, we let go of the person we used to be. We inhale and breathe in the moment that is becoming. In doing so, we welcome the person we are becoming. We repeat the process. This is meditation. This is renewal. This is life.”
                            – Lama Surya Das
                        </p>

                    </Grid.Column>

                </Grid>
                <Divider className='divider' />
            </section>
        </div>
    )
}
export default Audio;