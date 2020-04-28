import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage/MainPage';


function App() {
  return (
    <div className="App">

      <BrowserRouter >
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
