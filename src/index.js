import React from 'react';
import ReactDOM from 'react-dom';
import "react-bootstrap/dist/react-bootstrap.min.js";
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './components/App.js';

function Main() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </Provider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));