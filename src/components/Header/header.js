import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import './header.css'
import LocationPageContainer from '../LocationPage/locationPageContainer';

class Header extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
           <div className = "main-header-container">
           <a href='\'>Logo</a>
           <Link to="/index">Home</Link>
           <Link to="/locations">Locations</Link>
           <Link to="/products">Products</Link>
           <Link to="/teammembers">Team member</Link>
           </div> 
            <Route path="/"></Route>
            <Route path="/index"></Route>
            <Route path="/locations" exact component={LocationPageContainer}></Route>
            <Route path="/teammembers"></Route>
           
        </div>
        </BrowserRouter>
    );
  }
}

export default Header;
