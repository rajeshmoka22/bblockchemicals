import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar.js';
import Footer from './Footer/Footer.js';
import routes from '../routes/routes.js'


function App() {
  return (
    <main id="app" className="mainContent">
      <NavBar />
      <Switch>
        {
          routes.map(route => {
            return <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
          })
        }
      </Switch>
      <Footer />
    </main>
  )
}

export default App;