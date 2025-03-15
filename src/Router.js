import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Options() {
  return (
    <div>
      <h1>Options</h1>
    </div>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/options" component={Options} />
      </Switch>
    </BrowserRouter>
  );
}