import React from 'react';
import { Route } from 'react-router';
import App from '../App.js';

const routes = (store) => {
  return (
    <Route path="/ru/home" component={App}>
    </Route>);
};
export default routes;
