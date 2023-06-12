import React from 'react';
import store from "./redux/redux-store";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );

reportWebVitals();
