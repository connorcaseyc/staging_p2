import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './Store';
import { history } from './util/history';
import { Landing } from './components/Landing';
import { LoginOne } from './components/login-sequence/LoginOne';
import { LoginTwo } from './components/login-sequence/LoginTwo';
import { Register } from './components/Register';

const App: React.FC = () => {

  return (
      <div>
          <Provider store={store}>
              <Router history={history}>
                  {/* <NavBarComponent /> */}
                  <div>

                      <Switch>
                          <Route path="/login2" component={LoginTwo}/>
                          <Route path="/login1" component={LoginOne}/>
                          <Route path="/register" component={Register}/>
                          <Route path="/" component={Landing}/>
                      </Switch>
                  
                  </div>
              </Router>
          </Provider>
      </div>
  )
};

export default App;

