import React from 'react';
import { Grid, Image, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import AudioGrid from './AudioGrid'
import './Audio.css';
import tree from '../../assets/tree.png'


function Audio() {
    return (
        <div className='audio'>
            < header className='audio-title'>
                Audio Download
            </header>
            <section className='links'>
                <AudioGrid />
                <Divider className = 'divider'/>
                <Grid className = 
                'paragraph'
                columns={2} padded='horizontally' stackable>
                    <Grid.Column >
                    <Image src = {tree}/>
                    </Grid.Column>
                    <Grid.Column>
                        <p>
                            Prepare to be boarded. That’s quite a cutlass ye got thar, what ye need is a good scabbard! Take what you can, give nothing back you know, thats the 2nd time I’v watched that man sail away with my ship. To err is human but to arr is pirate!! But I am touched by y’loyalty mate.
                        </p>
                        
                    </Grid.Column>
                    
                </Grid>
            </section>
            {/* <img className='tree-img' src={tree} /> */}
        </div>
    )
}
export default Audio;