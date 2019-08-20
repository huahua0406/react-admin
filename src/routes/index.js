import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routesArr from './routes';
console.log(routesArr);

const renderRoutes = routes => {
    // TODO:未登录 跳转到login Redirect
    return (
        <Switch>
            {routesArr.map((item, index) => {
                return (
                    <Route
                        key={index}
                        path={item.path}
                        component={item.component}
                    />
                );
            })}
        </Switch>
    );
};

export default renderRoutes;
