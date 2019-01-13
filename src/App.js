import React from 'react';
import SlidePeople from './components/slidePeople';
import PersonDetailsSummary from './components/personDetailsSummary';
import './scss/App.scss';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faEnvelope, faTimes,faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter, Route} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

library.add(faEnvelope);
library.add(faTimes);
library.add(faChevronLeft);

//main component with router
const App=()=> {
        return (
            <BrowserRouter>
                <div>
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0.7 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper">
                    <Route exact path='/' component={SlidePeople}/>
                    <Route path='/person/:id' component={PersonDetailsSummary}/>
                    </AnimatedSwitch>
                </div>
            </BrowserRouter>
        );
};

export default App;
