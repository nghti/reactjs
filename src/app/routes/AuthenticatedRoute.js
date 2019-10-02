import React from "react";
import { Redirect, Route } from "react-router-dom";

import { hasToken } from "../../utils/helpers";
import Container from "../layouts/Container";

const AuthenticatedRoute = ({component: Component, ...rest}) => {
  const isAuthenticated = hasToken()

  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated ? (
          <Container
            Footer={rest.footer}
          >
            <Component {...props} />
          </Container>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      )}
    />
  )
}

AuthenticatedRoute.defaultProps = {
  footer: false,
}

export default AuthenticatedRoute
