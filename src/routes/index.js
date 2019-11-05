import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// 路由
import routes from '@/routes/routes';
// console.log(routes);

class Router extends Component {
	render() {
		const isLogged = sessionStorage.getItem('isLogin');
		return <HashRouter>{isLogged ? renderRoutes(routes) : renderRoutes([])}</HashRouter>;
	}
}
export default Router;
