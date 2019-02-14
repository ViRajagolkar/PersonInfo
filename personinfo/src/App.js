import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LoginComponent from './components/LoginComponent.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import RoleComponent from './components/RoleComponent.jsx';
import UserComponent from './components/UserComponent.jsx';
import UserlistComponent from './components/UserlistComponent.jsx'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>

          <Switch>
            <Route exact path='/' component={LoginComponent}/>
            <Route path='/login' component={LoginComponent}/>
            <Route path='/home' component={HomeComponent}/>
            <Route path='/role' component={RoleComponent}/>
            <Route path='/users' component={UserComponent}/>
            <Route path='/userslist' component={UserlistComponent}/>
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
