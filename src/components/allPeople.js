import React from 'react';
import {connect} from 'react-redux';
import OnePerson from './onePerson';
import {Link} from 'react-router-dom';

//component to render all people and pass data under specific person component.

const AllPeople = (props) => {
    let people = props.people.map((person, index) => {
        return (
            <Link to={'/person/' + person.id} key={index}>
                <OnePerson person={person}/>
            </Link>
        )
    });
    return (
        <main className='people'>
            {people}
        </main>
    )
};

//taking data dynamically using redux
const mapStateToProps = (store) => {
    return {
        people: store.people
    }
};

export default connect(mapStateToProps)(AllPeople);