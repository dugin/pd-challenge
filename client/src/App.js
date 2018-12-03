import React from 'react';
import CreateEditRecord from './create-edit-record';
import ROUTES from './helpers/routes';
import Home from './home';
import store from './store';
import { Provider } from 'react-redux';
import Theme from './theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Theme>
            <Route path="/" exact component={Home} />
            <Route path={ROUTES.NEW_RECORD} component={CreateEditRecord} />
            <Route path={ROUTES.EDIT_RECORD} component={CreateEditRecord} />
          </Theme>
        </Router>
      </Provider>
    );
  }
}

export default App;
