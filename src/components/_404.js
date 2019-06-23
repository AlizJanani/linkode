import React from 'react';

import './_404.css';
import { ContentPage } from './ui-elements';

const _404 = props => (
    <ContentPage center='true'>
        <h1 className="_404">
            صفحه مورد نظر یافت نشد
            <span className="_404-face">
                :(
            </span>
        </h1>
    </ContentPage>
);

export default _404;