import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/home/';
import Detail from '../views/detail';

const Routes = () =>
	<Switch>
    <Route path="/detail/:id" component={Detail} />
    <Route path="/">
      <Home />
    </Route>
  </Switch>

export default Routes;