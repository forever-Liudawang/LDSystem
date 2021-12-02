import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '@app/page/Home';
import Resume from '@app/page/Resume';
import ROUTER from '@app/common/router';
export default function router() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTER.root} exact component={Home} />
        <Route path={ROUTER.resume} exact component={Resume} />
      </Switch>
      <Redirect to={ROUTER.root} />
    </Router>
  );
}
