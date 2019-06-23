import React, { Component, Fragment } from 'react';

import './App.css';

import Content from './components/content';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
