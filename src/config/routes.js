import React from 'react';
import { Route } from 'react-router';
import App from '../App.js';
import Game from '../components/Game';
import Intro from '../components/Intro';
import Defeat from '../components/Defeat';
import Victory from '../components/Victory';

const routes = (store) => {
  return (
    <Route path="/" component={App}>
      <Route path="start" component={Intro} />
      <Route path="play" component={Game} />
      <Route path="defeat" component={Defeat} />
      <Route path="victory" component={Victory} />
    </Route>);
};
export default routes;
