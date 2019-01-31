import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { AppStore } from './reducers/main'
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker';

const store = createStore(AppStore);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
