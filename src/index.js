import { ContextProvider } from './contexts/ContextProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';


ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>, // Returns App warpped in Context
    document.getElementById('root')
)
