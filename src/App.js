import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import BasicLayout from '@/layouts/BasicLayout';
import Login from '@/pages/Login';
import NotFound from '@/pages/Error/NotFound';

import { auth } from '@/utils/auth';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						{/* 此处重定向的地址为登录后的首页面地址 */}
						<Route path="/" exact render={() => <Redirect to="/home" />} />
						{/* 路由鉴权，如果没有token则跳转到登录页 */}
						<Route
							path="/login"
							render={() => {
								return auth.getToken() ? <Redirect to="/" /> : <Login />;
							}}
						/>
                        {/* 此处404页面只是声明路由地址，暂未匹配路由 */}
						<Route path="/404" component={NotFound} />
						{/* 登录后的layout组件 */}
						<Route component={BasicLayout} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
