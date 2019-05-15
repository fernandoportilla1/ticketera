import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './Routes';

function App() {
  const basename = process.env.NODE_ENV === 'development' ? '/' : '/';

  return (
    <Provider store={store}>
      <Router basename={basename}>
        <Routes />
      </Router>
    </Provider >
  );
}

export default App;
