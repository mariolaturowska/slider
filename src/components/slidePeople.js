import React from 'react';
import People from './allPeople';

//component to render slide with all people and h1 caption.

const SlidePeople = () => {
    return (
        <div className='peopleWrapper'>
            <header>Meet our team</header>
            <People/>
        </div>
    )
};

export default SlidePeople;

