import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers/index';
import { saveToLocalStorage, loadFromLocalState } from './saveState';

const persistedState = loadFromLocalState();

const store = createStore(reducers, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
