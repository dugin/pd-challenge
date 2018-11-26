import React from 'react';
import Home from './home';
import store from './store';
import { Provider } from 'react-redux';
import Theme from './theme';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Theme>
          <Home />
        </Theme>
      </Provider>
    );
  }
}

export default App;
