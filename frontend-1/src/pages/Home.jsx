import React from "react";
import "../style.css";

function Home() {
    return (
        <div>
            <header>
                <h1 style={{ textAlign: "center" }}>Welcome to my portfolio</h1>
                <h2 style={{ textAlign: "center" }}>Home</h2>
            </header>

            <nav>
                <a href="Home">Home</a>
                <a href="About">About</a>
                <a href="Contact">Contact</a>
                <a href="Projects">Projects</a>
                <a href="Login">Login</a>
                <a href="SignUp">Sign Up</a>
            </nav>

            <main>
                <h2>About This Site</h2>
                <p>Enter data here, possible crud for logging into the application</p>

                <h6>
                    Adding a boiler plate inside of HTML, you may need to do ! on the first line of code
                    With all of the information on the code editor gone.
                </h6>
            </main>

            <footer>
                <p>Home</p>
            </footer>
        </div>
    );
}

export default Home;