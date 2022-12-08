import './LandingPage.css'
import HomePicture from "../Assets/LandingPagePicture1200x900.png"

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
                <a className="loginButton" href="/login ">LOGIN</a>
            </div>
        </header>
        <img className="homePicture" src={HomePicture} /> {/*DON'T PUT IT IN THE HEADER IT WILL RUIN EVERYTHING*/}


        <section className="textSection">
            <div classname = "textPurpose">
                <h1>Our purpose.</h1>
                <p>Vincent's mom works at a pharmacy and still uses a fax machine for no reason when she COULD use healthbase.</p>
            </div>
            <div classname = "textInfo">
                <h1>An easier way to access patient data.</h1>
                <p>Working with HealthBase means having easy access to all patient information over the cloud. No more waiting for doctors to fax over information, when you can access it all with the click of a button.</p>
            </div>
        </section>
    </div>
    )
}

export default Home;