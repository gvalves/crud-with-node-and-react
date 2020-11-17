import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store';

import GlobalStyles from './styles/GlobalStyles';
import { Scene } from './scenes';

const App: React.FC = () => {
  return (
    <Provider store={createStore(rootReducer)}>
      <Router>
        <GlobalStyles />
        <Scene />
      </Router>
    </Provider>
  );
};

export default App;
