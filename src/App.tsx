import React from 'react';
import * as H from 'history';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/styles';
import Japan from './features/covid/Japan/Japan';
import World from './features/covid/World/World';
import NotFound from './features/covid/NotFound/NotFound';
import Prefecture from './features/covid/Prefecture/Prefecture';

export type HistoryType = {
  history: H.History;
};

const generateClassName = createGenerateClassName({
  productionPrefix: 'wo',
});

const App: React.FC = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={World} />
          <Route exact path="/prefecture" component={Prefecture} />
          <Route exact path="/japan" component={Japan} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
