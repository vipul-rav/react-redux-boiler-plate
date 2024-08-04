import 'core-js/stable'
import 'whatwg-fetch';
import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { fetchConfig, fetchContent } from './redux/actions/configAction';
import * as serviceWorker from './serviceWorker';
import './assets/css/app.css';

Promise.all([store.dispatch(fetchConfig()), store.dispatch(fetchContent())]).then(() => {

    createRoot(document.getElementById("root")).render(
        <Provider store={store}>
            <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
                <App />
            </BrowserRouter>
        </Provider>,
      );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
