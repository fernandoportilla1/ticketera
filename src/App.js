import React from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './Routes';

const App = ({ store, basename }) => {
  return (
    <Provider store={store}>
      <Router basename={basename}>
        <Routes />
      </Router>
    </Provider >
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
