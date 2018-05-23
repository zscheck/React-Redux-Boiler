import React from 'react';

const Hero = ({header, click, button, message}) => {
    return (
        <div id="hero">
            <h1>{header}</h1>
            <h2>{message || 'This is where the top banner will go (for now)'}</h2>
            <button className='sample' onClick={click}>{button || 'Change Header'}</button>
        </div>
    )
} 

export default Hero;