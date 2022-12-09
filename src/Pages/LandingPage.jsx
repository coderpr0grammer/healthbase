import './LandingPage.css'
import HomePicture from "../Assets/LandingPagePicture.png"
import InkedHomePicture from "../Assets/InkedLandingPage.jpg"

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
                <a className="loginButton" href="/login">LOGIN</a> 
            </div>
        </header>

        {/*DON'T PUT IT IN THE HEADER IT WILL RUIN EVERYTHING*/} 
        <img className="homePicture" src={HomePicture} onmouseover={InkedHomePicture} onmouseout={HomePicture} alt="Smiling Doctor"/>  

        <section className="textSection">
            <section className="section1">
                <div classname = "textPurpose">
                    <h1>Our purpose.</h1>
                    <p>Vincent's mom works at a pharmacy and still uses a fax machine for no reason when she COULD use healthbase cause healthbase is a GOOD APPLICATION and it's GREAT and COOL!!!</p>
                </div>
                <div classname = "textInfo">
                    <h1>An easier way to access patient data.</h1>
                    <p>Working with HealthBase means having easy access to all patient information over the cloud. No more waiting for doctors to fax over information, when you can access it all with the click of a button.</p>
                </div>
            </section>
            <section className="section2">
                <div classname = "textBenefit">
                    <h1>Our impact.</h1>
                    <p>Financial impact always plays a significant factor in the success and effiency of an operation. Healthbase believes in the cost savings by centralizing data to reduce the operation services and costs required to serve at a medical standard.</p>
                </div>
                <div classname = "textTemp">
                    <h1>Idk what else to put here.</h1>
                    <p>There's a thing vincent pasted in the google chat can we incorporate that here somehow?</p>
                </div>
            </section>
        </section>
    </div>
    )
}

export default Home;