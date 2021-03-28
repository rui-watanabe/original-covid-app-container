// import React from 'react';
// import Header from './features/covid/Header/Header';

// const App: React.FC = () => {
//   return (
//     <>
//       <Header />
//     </>
//   );
// };

// export default App;

import React from 'react';
import * as H from 'history';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './features/covid/Header/Header';
import MicroFrontend from './features/covid/MicroFrontend';

import './App.css';

type HistoryType = {
  history: H.History;
};

const Japan: ({ history }: HistoryType) => JSX.Element = ({ history }) => {
  return (
    <>
      <Header />
      <MicroFrontend
        history={history}
        host={process.env.REACT_APP_JAPAN_HOST}
        name="Japan"
      />
    </>
  );
};

const World: ({ history }: HistoryType) => JSX.Element = ({ history }) => {
  return (
    <>
      <Header />
      <MicroFrontend
        history={history}
        host={process.env.REACT_APP_WORLD_HOST}
        name="World"
      />
      ;
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Japan} />
        <Route exact path="/world" component={World} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
