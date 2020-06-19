import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { map } from 'lodash';

import { hasToken } from '@/utils/helpers';
import DashboardLayout from '@/components/Layout/DashboardLayout';

class AppRouter extends PureComponent {
  renderRoute(route) {
    const RouteComponent = route.component;

    if (route.layout) {
      return (
        <DashboardLayout>
          <RouteComponent />
        </DashboardLayout>
      );
    }

    return <RouteComponent />;
  }

  render() {
    const { routes, history } = this.props;
    const isAuthenticated = hasToken();
    return (
      <Switch>
        {map(routes, (route, key) => (
          <Route
            key={key}
            path={route.path}
            exact={route.exact}
            render={() => {
              if (route.requiredAuth && !isAuthenticated) {
                return history.push('/login');
              }

              if (route.restricted && isAuthenticated) {
                return history.push('/');
              }

              return this.renderRoute(route);
            }}
          />
        ))}
      </Switch>
    );
  }
}

export default withRouter(AppRouter);
