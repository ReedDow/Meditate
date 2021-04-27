import React, {useState} from 'react';
import { Grid, Image, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import DividerExampleSection from './DividerExampleSection'
import './Video.css';
import Audio from '../audioLinks/Audio'
import Contributors from '../contributors/Contributors'
import tree from '../../assets/tree.png'


function Video() {

    const [audioItem, setAudioItem] = useState('')

    const handleSelectAudio = (event) => {
        setAudioItem({
        audioItem: event.target.value
        })
      }

    return (
        <div className='video'>
            < header className='video-title'>
                Video Links
            </header>
            <section className='links'>
                <DividerExampleSection />
                <Divider className = 'divider'/>
                <Grid className = 
                'paragraph'
                columns={2} padded='horizontally' stackable>
                    <Grid.Column >
                        <p>
                            Prepare to be boarded. That’s quite a cutlass ye got thar, what ye need is a good scabbard! Take what you can, give nothing back you know, thats the 2nd time I’v watched that man sail away with my ship. To err is human but to arr is pirate!! But I am touched by y’loyalty mate.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src = {tree}/>
                    </Grid.Column>
                    
                </Grid>
                <Divider className = 'divider'/>
                <Audio/>
                <Divider className = 'divider'/>
                <Contributors/>
            </section>
            {/* <img className='tree-img' src={tree} /> */}
        </div>
    )
}
export default Video;