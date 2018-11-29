import React from 'react';
import CreateRecord from './create-record';
import ROUTES from './helpers/routes';
import Home from './home';
import store from './store';
import { Provider } from 'react-redux';
import Theme from './theme';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Theme>
            <Route path="/" exact component={Home} />
            <Route path={ROUTES.NEW_RECORD} component={CreateRecord} />
          </Theme>
        </Router>
      </Provider>
    );
  }
}

export default App;
