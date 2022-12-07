import './App.css';
import Navbar from './Components/NavBar';
import Home from './Pages/Home';
import Send from './Pages/Send';
import Database from './Pages/Database';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';

import DynamicList from './Components/DynamicList';

function App() {
  return(
    <div className='App'>
      <BrowserRouter>
        <h1>I can see this on the live server!!!</h1>
        <Navbar /> (//Navbar remains there always)

        <Routes>
          (//Renders the Home page)
          <Route path="/" exact element={<Home />} />
          
          (//Renders the Sending Information page)
          <Route path="/send" element={<Send />} />

          (//Renders the Database Accessing page)
          <Route path='/database' element={<Database />}/>;
        </Routes>
      </BrowserRouter>
    </div>
  )

  }

export default App;
