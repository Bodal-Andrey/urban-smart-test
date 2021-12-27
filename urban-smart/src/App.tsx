import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { AppRoute } from './const';
import HomePage from './components/home-page';
import Profile from './components/profile';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={HomePage} />
        <Route exact path={AppRoute.PROFILE} component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
