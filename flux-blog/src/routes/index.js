import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Member from '../views/member/';
import MemberDetail from '../views/member/detail';
import Traveller from '../views/traveller';
import TravellerDetail from '../views/traveller/detail';

const Routes = () =>
	<Switch>
    <Route path="/member/:id" component={MemberDetail} />
    <Route path="/traveller/:id" component={TravellerDetail} />
    <Route path="/traveller" component={Traveller} />
    <Route path="/">
      <Member />
    </Route>
  </Switch>

export default Routes;