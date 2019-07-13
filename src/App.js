import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Header from './components/layout/Header';
import Index from './components/layout/Index';
import FooterBar from './components/layout/FooterBar';

import { Provider } from './context';

import './App.css';

class App extends Component {
  render(){
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <NavBar/>
            <Header/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index}/>
              </Switch>
            </div>
            <FooterBar/>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
