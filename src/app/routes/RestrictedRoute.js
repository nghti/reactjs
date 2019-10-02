import React from "react";
import { Redirect, Route } from "react-router-dom";

import { hasToken } from "../../utils/helpers";
import Container from "../layouts/Container";

const RestrictedRoute = ({component: Component, ...rest}) => {
  const isAuthenticated = hasToken()

  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated ? (
          <Redirect
            to={{
              pathname: '/top',
              state: { from: props.location }
            }}
          />
        ) : (
          <Container
            Footer={rest.footer}
          >
            <Component {...props} />
          </Container>
        )
      )}
    />
  )
}

RestrictedRoute.defaultProps = {
  footer: false,
}

export default RestrictedRoute
