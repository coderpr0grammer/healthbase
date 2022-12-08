import './LandingPage.css'
import HomePicture from "../Assets/LandingPagePicture1200x900.png"
<<<<<<< HEAD
import InkedHomePicture from "../Assets/InkedLandingPage.jpg"
=======
import LoginPage from ".LoginPage"
>>>>>>> f492402a9a1d4cbb41b1aa884b38916a88807af3

function Home(){    
    return (
    <div className="homeContainer">
        <header className="homeHeader">
            <div className="headerText">
                <h1>Welcome to HealthBase.</h1>
                <p>Helping medical professionals communicate.</p>
            </div>
            <div className="button">
                <a className="signupButton" href="/signup">SIGN UP</a>
                <a className="loginButton" href="/login" element={<LoginPage/>}>LOGIN</a> {/*This makes an error... I'll figure this out in the morning*/}
            </div>
        </header>
        {/*DON'T PUT IT IN THE HEADER IT WILL RUIN EVERYTHING*/}
        <img className="homePicture" src={HomePicture} onmouseover={InkedHomePicture} onmouseout={HomePicture} alt="Smiling Doctor"/> 

        <section className="textSection">
            <div classname = "textPurpose">
                <h1>Our purpose.</h1>
                <p>Vincent's mom works at a pharmacy and still uses a fax machine for no reason when she COULD use healthbase.</p>
            </div>
            <div classname = "textInfo">
                <h1>An easier way to access patient data.</h1>
                <p>Working with HealthBase means having easy access to all patient information over the cloud. No more waiting for doctors to fax over information, when you can access it all with the click of a button.</p>
            </div>
            <div classname = "textBenefit">
                <h1>Our Impact</h1>
                <p>Finnancial impact always plays a significant factor in the success and effiency of an operation. Healthbase believes in the cost savings by centralizing data to reduce the operation services and costs required to serve at a medical standard.</p>
            </div>
        </section>
    </div>
    )
}

export default Home;