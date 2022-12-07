import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Send from './components/Send';
import Database from './components/Database';
import {BrowserRouter as Router, Route} from "react-router-dom";
import React from 'react';

import DynamicList from './Components/DynamicList';

function App() {
<<<<<<< HEAD
  return(
    
    <Router>
      <h1>I can't see this on the live server</h1>
      <Navbar /> (//Navbar remains there always)
      
      (//Renders the Home page)
      <Route path="/" exact>
        <Home />
      </Route>

      (//Renders the Sending Information page)
      <Route path="/send">
        <Send />
      </Route>

      (//Renders the Database Accessing page)
      <Route path="/database">
        <Database />
      </Route>

    </Router>
    
  )

  }
=======
  return (
    <div className='App'>
      <DynamicList />
    </div>
  );
}
>>>>>>> 29c2200c8dffa157c1e4ff2e4871dc92b5e2b061

export default App;
