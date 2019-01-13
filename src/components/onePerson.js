import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

//component to add one person with photo. Under each photo, it is name, occupation and location. On every photo it is added div with envelope.

const OnePerson=(props)=> {
        const {person} = props;
        return (
            <section className='onePersonWrapper'>
                <figure className='onePerson'>
                    <img src={person.url}/>
                    <div className='iconWrapper'>
                        <span>
                            <FontAwesomeIcon icon="envelope"/>
                        </span>
                    </div>
                </figure>
                <figcaption className='personDetails'>
                    <p>
                        <span>{person.name}</span>
                        <span>{person.occupation}</span>
                        <span>{person.location}</span>
                    </p>
                </figcaption>
            </section>
        )
};

export default OnePerson;