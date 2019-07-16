import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Main from './Pages/Main';
// import Blog from './Pages/Blog';

import {
  Main,
  Blog,
  Dashboard,
  Contents,
  ContentDetail,
  Configuration
} from './Pages';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/router-test" component={Main} />
    <Route path="/router-test/:id" component={Main} />

    {/* Blog */}
    <Route exact path="/blog" component={Blog} />

    {/* Dashboard */}
    <Route exact path="/dashboard" component={Dashboard} />

    {/* Configuration */}
    <Route exact path="/configuration" component={Configuration} />

    {/* Contents */}
    <Route exact path="/contents" component={Contents} />
    <Route exact path="/contents/:id" component={ContentDetail} />
  </Switch>
);

export default AppRouter;
