import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItems = props => (
    <Fragment>
        <li><NavLink activeClassName="active-link" to="/help">آموزش</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/about">درباره</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/contact">تماس با ما</NavLink></li>
    </Fragment>
);

export default NavigationItems;