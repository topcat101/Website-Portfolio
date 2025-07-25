import React from "react";
import "../styles/main_Content.css";
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
                <p>
                    Showing the blogging, what I am working on
                    and what I am doing in my spare time.
                    This is a personal portfolio website to showcase my work and projects.

                    It includes a personal workspace where I can manage my projects and tasks.
                    The site is built with React and uses a REST API for authentication and data management.

                    The personal workspace allows me to create, read, update, and delete projects.
                    It also includes a login and registration system for user authentication. 

                    This feature is still to come, but it will allow me to manage my projects more effectively.
                    The site is designed to be responsive and user-friendly, with a clean and modern interface.
                </p>

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