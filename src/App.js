import React from 'react';
import { Provider } from 'react-redux'
// store
import store from './redux/store';
// antd 国际化
import { LocaleProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';  // antd 框架中内置了 moment 库
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
// 全局对象
import config from './config/config';
import api from './api';
// App css
import './App.css'; 
/**
 *  Api是全局变量
 *  App.js -> global.Api = api
 */
global.Api = api
global.Config = config

// TODO:可以放在router index文件下 
// 路由
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login/Login';
import BasicLayout from './layouts/BasicLayout/BasicLayout';
import NotFound from '@/pages/Error/NotFound';


function App() {
    return (
        <Provider store={store}>
            {/* <LocaleProvider locale={zhCN}> */}
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
            {/* </LocaleProvider> */}
        </Provider>
    );
}

export default App;
