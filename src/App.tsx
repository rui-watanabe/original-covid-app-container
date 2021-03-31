import React from 'react';
import * as H from 'history';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './features/covid/NotFound/NotFound';
import Japan from './features/covid/Japan/Japan';
import World from './features/covid/World/World';

export type HistoryType = {
  history: H.History;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Japan} />
        <Route exact path="/world" component={World} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
