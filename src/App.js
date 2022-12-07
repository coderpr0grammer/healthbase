import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Send from './components/Send';
import Database from './components/Database';
import {BrowserRouter as Router, Route} from "react-router-dom";
import React from 'react';

import DynamicList from './Components/DynamicList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return(
    <div className='App'>
      <BrowserRouter>
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
          <Route path='/' element={<DynamicList />}/>;
          {/* <Route path="/database">
            <Database />
          </Route> sorry to comment this off edwin i'm just putting this thing up here as a temp*/}
        </Router>
      </BrowserRouter>
      </div>
  )

  }

export default App;
