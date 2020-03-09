import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './style/index.css';
import App from "./App";
// import { UserProvider } from './UserContext';
// import "./components/clock/time_interval"
import * as serviceWorker from './serviceWorker';

ReactDOM.render( 
    // <UserProvider>
        <BrowserRouter >
            <App/>
        </BrowserRouter>,
    // </UserProvider>,
    document.getElementById('root')
)


serviceWorker.register();