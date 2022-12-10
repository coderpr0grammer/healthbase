import Navbar from './Components/Navbar';
import Home from './Pages/LandingPage';
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Applied from "./Pages/Applied";
import Database from "./Pages/Database";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {useState} from 'react';

function App() {
    const [user, changeUser] = useState({
        userhash: null,
        passhash: null
    });



    return (
        <BrowserRouter>
            <Navbar /> {/*Navbar remains there always*/}
 
            <Routes>
                <Route path="/" exact element={<Home />} />
 
                <Route path="/login" element={<LoginPage />} />
     
                <Route path="/signup" element={<SignupPage />} />

                <Route path="/database" element={<Database />} /> 
     
                <Route path="/thankyou" element={<Applied />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;