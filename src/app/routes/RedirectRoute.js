import React from "react";
import { Redirect, Route } from "react-router-dom";

const RedirectRoute = ({...rest, redirectPath}) => {
  return (
    <Route 
      {...rest} 
      render={props => (
        <Redirect
          to={{
            pathname: redirectPath,
            state: { from: props.location }
          }}
        />
      )}
    />
  )
}

export default RedirectRoute