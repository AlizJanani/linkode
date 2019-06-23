import React from 'react';
import { ContentPage } from '../ui-elements';

import './send-page.css';
import FileDrop from './file-drop';
import SendChoose from './choose';

const SendPage = props => {
    return (
        <ContentPage className="send-page">
            <h1>
                استفاده از این سرویس نیازمند
                <span> اینترنت </span>
                است !
            </h1>
            <FileDrop />
            <SendChoose />
        </ContentPage>
    );
}

export default SendPage;