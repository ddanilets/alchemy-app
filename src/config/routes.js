import React from 'react';
import { Route } from 'react-router';
import App from '../App.js';
import Game from '../components/Game';

const routes = (store) => {
  return (
    <Route path="/ru/home" component={App}>
      <Route path="play" component={Game} />
    </Route>);
};
export default routes;
