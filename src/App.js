import React from 'react';
import { Provider } from 'react-redux'
// store
import store from './redux/store';
// 内置组件国际化
import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';  // antd 框架中内置了 moment 库
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
// 全局对象
import config from './config/config';
import api from './api';
// App css
import './App.css'; 
/**
 *  Api 全局变量
 *  App.js -> window.Api = api
 */
window.Api = api
window.Config = config

// 路由
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import BasicLayout from '@/layouts/BasicLayout/BasicLayout';
import Login from '@/pages/Login/Login';
import NotFound from '@/pages/Error/NotFound';


function App() {
    return (
        <ConfigProvider locale={zhCN}>
            <Provider store={store}>
                    <div className="App">
                        <Router>
                            <Switch>
                                <Route exact path='/' render={() => <Redirect to={`/home`} push/>}/>
                                <Route path='/login' component={Login}/>
                                <Route path='/' component={BasicLayout}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </Router>
                    </div>
            </Provider>
        </ConfigProvider>
    );
}

export default App;
