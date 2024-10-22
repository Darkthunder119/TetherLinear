import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'urql';

import App from './App';
import { client } from './lib/urqlClient';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider value={client}>
            <App />
        </Provider>
    </React.StrictMode>,
);
