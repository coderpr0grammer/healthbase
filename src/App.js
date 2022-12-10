import Navbar from './Components/Navbar';
import Home from './Pages/LandingPage';
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Applied from "./Pages/Applied";
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
 
                <Route path="/login" exact element={<LoginPage />} />
     
                <Route path="/signup" exact element={<SignupPage />} />
     
                <Route path="/thankyou" exact element={<Applied />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;