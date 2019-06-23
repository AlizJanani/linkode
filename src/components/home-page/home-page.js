import React from 'react';

import './home-page.css';

import Title from './title';
import Art from './art';
import Chooser from './choose';
import { ContentPage } from '../ui-elements';

const HomePage = props => (
    <ContentPage className="home-page">
        <Title />
        <Art />
        <Chooser />
    </ContentPage>
);

export default HomePage;