import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/LandingPage';
import Send from './Pages/Send';
import Database from './Pages/Database';
import LoginPage from "./Pages/LoginPage"
import SignupPage from "./Pages/SignupPage"
import Applied from "./Pages/Applied"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';

function App() {
  return(
    <div className='App'>
      <BrowserRouter>
        <Navbar /> {/*Navbar remains there always*/}

        <Routes>
          {/*Renders the Home page*/}
          <Route path="/" exact element={<Home />} />
          
          {/*Renders the Sending Information page*/}
          <Route path="/send" element={<Send />} />

          {/*Renders the Database Accessing page*/}
          <Route path='/database' element={<Database />} />

          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/signup" exact element={<SignupPage />} />
          <Route path="/applied" exact element={<Applied />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
