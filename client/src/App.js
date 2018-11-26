import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Aqui</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
