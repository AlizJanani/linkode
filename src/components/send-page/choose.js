import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import "./choose.css";

import { Button } from '../ui-elements';

const SendChoose = props => (
    <div className="send-choose">
        <Link to="/host">
            <Button disabled={props.haveFiles} choose="true">دریافت لینکد</Button>
        </Link>
    </div>
);

const mapStateToProps = state => (
    {
        haveFiles: (state.files.length === 0)
    }
);

export default connect(mapStateToProps)(SendChoose);