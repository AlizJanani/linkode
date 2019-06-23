import React from 'react';
import { Link } from "react-router-dom";

import './choose.css';

import { Button } from '../ui-elements';

const HomeChoose = props => (
    <div className='home-choose'>
        <Link to="/receive">
            <Button choose="true" type='ghost'>دریافت</Button>
        </Link>
        <div className="home-choose-seperator" />
        <Link to="/send">
            <Button choose="true">ارسال</Button>
        </Link>
    </div>
);

export default HomeChoose;