// Import dependencies
import React from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';

// Import root store
import store from './rootStore';

// Import containers
import Main from './containers/Main';

const App = () => (
  <Provider store={store}>
      <Router>
        <main id="container">
          <Route exact path="/" component={Main} />
        </main>
      </Router>
  </Provider>
);

export default App;