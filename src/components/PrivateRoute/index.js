import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '@/utils/auth';

// 这个组件是用于防止未登录用户访问特定路由的高阶组件
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => auth.getToken() ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
);

export default PrivateRoute;
