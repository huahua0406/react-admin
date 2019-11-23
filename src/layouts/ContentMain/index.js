import React, { Component } from 'react';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '@/components/PrivateRoute';
import { routes } from '@/router/routes';
import './index.css';

@withRouter
class ContentMain extends Component {
	render() {
		return (
			<div className="routeWrap">
				<Switch>
					{routes.map((route, i) => (
						<PrivateRoute
							key={route.key || i}
							path={route.path}
							exact={route.exact}
							component={route.component}
						/>
					))}
					<Route render={() => <Redirect to="/404" />} />
				</Switch>
			</div>
		);
	}
}
export default ContentMain;
