import React from "react";
import "../style.css";

function About() {
    return (
        <div>
            <header>
                <h1 style={{ textAlign: "center" }}>Welcome to my portfolio</h1>
                <h2 style={{ textAlign: "center" }}>About</h2>
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
                <p>This is a basic HTML template to get you started with your website.</p>
            </main>

            <footer>
                <p>About</p>
            </footer>
        </div>
    );
}

export default About;