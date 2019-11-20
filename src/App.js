import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import BasicLayout from '@/layouts/BasicLayout';
import Login from '@/pages/Login';
import NotFound from '@/pages/Error/NotFound';
// App css
import './App.css';

//装饰器模式链接Redux数据，省略很多复杂代码，真香。注意：不要的对象可以传个null
@connect(
    state => ({
        isLogin: state.userInfo||false
    })
)
class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						{/* //此处重定向的地址为登录后的首页面地址 */}
						<Route exact path="/" render={() => <Redirect to="/home" push />} />
						{/* //此处404页面只是声明路由地址，暂未匹配路由 */}
						<Route
							path="/login"
							render={() => {
								return this.props.isLogin ? <Redirect to="/" /> : <Login />;
							}}
						/>
						{/* //登录后的主模板组件 */}
						<Route render={() => <BasicLayout />} />
						{/* //路由鉴权，如果没有id_token则跳转到登录页 */}
						<Route path="/404" component={NotFound} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
