import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './assets/scss/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
);