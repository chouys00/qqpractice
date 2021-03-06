import React, {Suspense} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

const renderRoutes = (
    routes, authed, authPath = '/login', extraProps = {},
    switchProps = {}) => routes ? (
    <Switch {...switchProps}>
      <Suspense fallback={<div>123</div>}>
        {routes.map((route, i) => (
            <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                render={(props) => {
                  if (!route.requiresAuth || authed || route.path ===
                      authPath) {
                    return <route.component {...props} {...extraProps}
                                            route={route}/>;
                  }
                  return <Redirect
                      to={{pathname: authPath, state: {from: props.location}}}/>;
                }}
            />
        ))}
      </Suspense>
    </Switch>
) : null;
export default renderRoutes;