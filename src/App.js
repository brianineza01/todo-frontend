import React from 'react';
import Login from './components/login/LoginContainer';
import { Provider } from "react-redux";
import store from './store'
import './app.css'

function App() {
    return (
        <Provider store={store}>
            <div className='app'>
                <Login />
            </div>
        </Provider>
    )
}

export default App
