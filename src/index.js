import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import './variables.css';
import './index.css';

import App from './App';
import reducer from './redux/reducer';

const store = createStore(reducer);

const CompeleteApp = props => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(<CompeleteApp />, document.getElementById('root'));
registerServiceWorker();