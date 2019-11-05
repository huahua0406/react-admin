import React from 'react';
import Router from './routes';
// 全局对象
import config from './config/config';
//api
import api from './api';
// App css
import './App.css';

/**
 *  Api 全局变量
 *  App.js -> window.Api = api
 */
window.Api = api;
window.Config = config;

function App() {
    return (
        <div className="App">
            <Router/>
        </div>
    );
}

export default App;
