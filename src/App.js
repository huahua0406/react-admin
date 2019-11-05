import React from 'react';
import { Provider } from 'react-redux'
/* eslint-disable */
// 内置组件国际化
import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';  // antd 框架中内置了 moment依赖库
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
// store
import store from './redux/store';
// Router
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

// http://www.jintiankansha.me/t/WBVqY5oufB

function App() {
    return (
        <Provider store={store}>
            <ConfigProvider locale={zhCN}>
                    <div className="App">
                        <Router/>
                    </div>
                </ConfigProvider>
        </Provider>
    );
}

export default App;
