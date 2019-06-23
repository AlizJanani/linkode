import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

import Navigation from './navigation';
import LogoType from './svg/logo-type';
import { NakedButton } from './ui-elements';
import PhoneNavigation from './phone-navigation';

class Footer extends Component {    
    state = {
        closed: true
    }

    toggleClassesHandler = () => {
        this.setState(prevState => (
            { closed: !prevState.closed }
        ));
    }

    render() {
        return (
            <Fragment>
                <PhoneNavigation closed={this.state.closed} />
                <footer className="footer">
                    <Navigation />
                    <NakedButton className="material-icons" onClick={this.toggleClassesHandler}>dehaze</NakedButton>
                    <Link to="/" className="footer-logo-type">
                        <LogoType className="footer-logo-type" />
                    </Link>
                    <i className="material-icons">n</i>
                </footer>
            </Fragment>
        );
    };
};

export default Footer;