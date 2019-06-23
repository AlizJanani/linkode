import React from 'react';
import { Input, Button } from '../ui-elements';

import "./choose.css";

const HostChoose = props => {
    return (
        <div className="recept-choose">
            <Input icon="link" readOnly placeholder="لینک اتصال (فایلی انتخاب نشده)" className="recept-choose-link"/>
            <Button circle="true"><i className="material-icons">code</i></Button>
        </div>
    )
}

export default HostChoose;