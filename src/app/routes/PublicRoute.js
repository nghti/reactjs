import React from "react";
import { Route } from "react-router-dom";

import Container from "../layouts/Container";

const PublicRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Container
          Footer={rest.footer}
        >
          <Component {...props} />
        </Container>
      )}
    />
  )
}

PublicRoute.defaultProps = {
  footer: false,
}

export default PublicRoute
