import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import PortfolioPage from './../Portfolio/PortfolioPage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={PortfolioPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
