// @flow
import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const ParallaxStyled = styled.div 
`.section {
    height: 110vh;
  }
  .parallax {
    height: 500px;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      position: absolute;
    }
    h2 {
      position: absolute;
      left: 40vmin;
      text-align: justify;
      font-size: 20px;
      text-shadow: 1px 4px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
    }
  }
`;

function Parallax() {
    return (
        <ParallaxStyled>
            <Controller>
                <div className="section" />
                <Scene
                    indicators={false}
                    duration="200%"
                    triggerHook="onEnter"
                >
                    <Timeline
                        wrapper={<div className="parallax" />}
                    >
                        <Tween
                            position="0"
                            from={{
                                yPercent: -50,
                            }}
                            to={{
                                yPercent: 0,
                            }}
                        >
                            <img src="https://placeimg.com/1000/1000/nature" alt="" />
                        </Tween>
                        <Tween
                            position="0"
                            from={{
                                top: '0%',
                                scale: 1.5,
                            }}
                            to={{
                                top: '70%',
                                scale: 2,
                            }}
                        >
                            <h2>When you realize nothing is lacking, the whole world belongs to you. -Lao Tzu</h2>
                        </Tween>
                    </Timeline>
                </Scene>
                <div className="section" />
            </Controller>
        </ParallaxStyled>
    );
}
    export default Parallax;