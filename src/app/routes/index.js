import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'

import { history } from '../store'
import RedirectRoute from "./RedirectRoute";
import RestrictedRoute from "./RestrictedRoute";
import AuthenticatedRoute from "./AuthenticatedRoute";
import PublicRoute from "./PublicRoute";
import { PageNotFound } from "../exception";
import { PageLogin } from "../../features/auth";
import { PageTop } from "../../features/top";
import { PageAbout } from "../../features/about";

const routes = (
  <ConnectedRouter history={history}>
    <Switch>
      <RedirectRoute exact path="/" redirectPath="/top"/>
      <RestrictedRoute exact path="/login" component={PageLogin}/>
      <PublicRoute exact path="/top" component={PageTop} footer={true}/>
      <AuthenticatedRoute exact path="/about" component={PageAbout}/>
      <Route exact path="/404" component={PageNotFound}/>
      <RedirectRoute redirectPath="/404"/>
    </Switch>
  </ConnectedRouter>
)

export default routes
