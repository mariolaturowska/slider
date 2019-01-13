import React from 'react';
import {connect} from 'react-redux';
import Swiper from 'react-id-swiper';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

//slide component for specific person when it is clicked on main website. It renders information related to occupation and name. Bu using Swiper, it goes to next or previous slide.

class PersonDetailsSummary extends React.Component {

    //Event to close slides and come back to main page
    closePerson = () => {
        this.props.history.push('/');
    };

    //function to have dynamically changing router based on slide where currently it is user
    setNewRoute = () => {
        this.currentRoutePage = parseInt(this.swiper.activeIndex) + 1;
        this.props.history.push('/person/' + this.currentRoutePage);
    };

    //lifecycle method used for setting id in router dynamically
    componentDidMount() {
        this.swiper.on('slideChange', this.setNewRoute);
    }

    render() {

        //dynamically adding data on slides with people details
        let personDetails = this.props.people.map((details, id) => {
            return (
                <article className='wrapperPeopleDetails' key={id}>
                    <div className='wrapperTimes'>
                    <span>
                <FontAwesomeIcon icon="times" onClick={this.closePerson}/>
                    </span>
                    </div>
                    <section className='wrapperPersonDetails'>
                        <h3>{details.occupation}</h3>
                        <h2>{details.name}</h2>
                    </section>
                </article>
            )
        });

        //description of params to be added to Swiper
        this.params = {
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 50,
                grabCursor: true,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            initialSlide: parseInt(this.props.match.params.id) - 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            speed: 700
        };

        //dynamically returning data for slider using Swiper
        return (
            <Swiper {...this.params} ref={(node) => {
                if (node) this.swiper = node.swiper}}>
                {personDetails}
            </Swiper>
        )
    }
}

//taking dynamically data using redux
const mapStateToProps = (store) => {
    return {
        people: store.people
    }
};

export default connect(mapStateToProps)(PersonDetailsSummary);