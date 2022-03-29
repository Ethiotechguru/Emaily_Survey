import React, { StrictMode } from "react";
import  ReactDOM  from "react-dom";
import App from './components/App';
import { store } from "./reducers/index";
import {Provider} from 'react-redux';
ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
    document.getElementById('root')
)