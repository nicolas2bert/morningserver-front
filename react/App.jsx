import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import Routes from './Routes';

// import { editWebsite, generateWebsite } from './actions';

const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
    ),
);

// console.log('getState!!!', store.getState());

// store.dispatch(generateWebsite({ title: 'My first website' }));

// console.log('getState2!!!', store.getState());

const unsubscribe = store.subscribe(() => console.log('store.getState() ===>>> ', store.getState()));

const node = document.getElementById('app');

const app = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Routes />
        </Provider>
        , node,
    );
};

app();
