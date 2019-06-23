import React from 'react';

import { CSSTransition } from 'react-transition-group';

import './phone-navigation.css';
import NavigationItems from './navigation-items';

const PhoneNavigation = props => (
    <CSSTransition mountOnEnter unmountOnExit in={!props.closed} classNames="phone-navigation" timeout={500}>
        <ul className='phone-navigation'>
            <NavigationItems />
        </ul>
    </CSSTransition>
);

export default PhoneNavigation;