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
        <img className="homePicture" src={HomePicture} />
    </div>
    )
}

export default Home;