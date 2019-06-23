import React from 'react';
import { ContentPage } from '../ui-elements';

const GuestPage = props => {
    return (
        <ContentPage>
            sadf
            {props.match.params.linkode}
        </ContentPage>
    );
};

export default GuestPage;