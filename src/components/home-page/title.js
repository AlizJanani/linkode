import React from 'react';

import './title.css';

const Title = props => (
    <h1 className="title-text">
        ارسال فایل به
                <div className="title-devices-keeper">
            <div className="title-devices-visible">
                <span className="title-device">موبایل</span>
                <span className="title-device">کامپیوتر</span>
                <span className="title-device">تبلت</span>
                <span className="title-device">موبایل</span>
            </div>
        </div>
    </h1>
);

export default Title;