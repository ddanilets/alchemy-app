import React from 'react';
import { Route } from 'react-router';
import App from '../App.js';
import Game from '../components/Game';
import Intro from '../components/Intro';

const routes = (store) => {
  return (
    <Route path="/" component={App}>
      <Route path="start" component={Intro} />
      <Route path="play" component={Game} />
    </Route>);
};
export default routes;
