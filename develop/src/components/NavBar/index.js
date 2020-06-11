import React from 'react';
import './pages/style.css';
// ===============
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavTabs from './pages/NavTabs';
import Home from './pages/Home'
import About from './pages/About';
import Instructions from './pages/Instructions';
import Rules from './pages/Rules';
// ==================

function NavBar () {
  return (
    <>
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/instructions" component={Instructions} />
          <Route exact path="/rules" component={Rules} />
        </div>
      </Router>
      
    </>
  );
}

export default NavBar;
