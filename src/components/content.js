import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './content.css';

import HomePage from './home-page/home-page';
import SendPage from './send-page/send-page';
import HostPage from './host-page/host-page';
import GuestPage from './guest-page/guest-page';
import _404 from './_404';

const Content = props => (
    <TransitionGroup component="main">
        <CSSTransition key={props.location.key} classNames="content-page" timeout={{ enter: 500, exit: 0 }}>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/send" component={SendPage} />
                <Route path="/host" component={HostPage} />
                <Route path="/receive" component={_404}/>
                <Route path="/guest/:linkode" component={GuestPage} />
                <Route component={_404} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
);

export default withRouter(Content);