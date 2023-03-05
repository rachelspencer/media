import './index.css';
import React from 'react';
import { createRoot } from 'react-dom';
import App from "./App";
import { Provider } from 'react-redux';
import { store } from './store';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
