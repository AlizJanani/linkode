import React from 'react';

import './navigation.css';
import NavigationItems from './navigation-items';

const Navigation = props => (
    <nav>
        <ul className="navigation">
            <NavigationItems />
        </ul>
    </nav>
);

export default Navigation;