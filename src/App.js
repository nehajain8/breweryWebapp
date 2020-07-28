import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/header';


class App extends Component {
  render() {
    return (
        <div>
          <div className = "main-container">
          <Header/>
          </div>
        </div>
    );
  }
}

export default App;
