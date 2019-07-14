import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import Header from './components/layout/Header';
import Index from './components/layout/Index';
import FooterBar from './components/layout/FooterBar';
import ScrollUpButton from 'react-scroll-up-button';

import { ContextController } from './context';

import './App.css';

class App extends Component {
  render(){
    return (
      <ContextController>
        <Router>
          <React.Fragment>
            <NavBar/>
            <Header/>
            <main>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Index}/>
                </Switch>
              </div>
            </main>
            <FooterBar/>
            <ScrollUpButton/>
          </React.Fragment>
        </Router>
      </ContextController>
    );
  }
}

export default App;
