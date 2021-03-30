import React from 'react';
import GridExampleColumns from '../GridExampleColumns';
import './VideoDescriptions.css'


function VideoDescriptions(){
    return (
        <div className='description'>
            <p className = 'description-title'>
                Descriptions
            </p>
            
            <section className = 'description-paragraph'>
            <GridExampleColumns/>
            </section>
        </div>
    )
}
export default VideoDescriptions;