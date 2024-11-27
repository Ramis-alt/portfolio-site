import React from 'react';
import { Link } from 'react-router-dom';

export default function Info() {
    const afterClick = "https://www.linkedin.com/in/ramiro-renteria-24bba520/";
    const myGitHub = "https://github.com/Ramis-alt";
    return (
        <main className="main--body">
            <img src='images/IMG_1755.png' alt="Ramiro Renteria, smiling." />
            <div className="profile-info">
                <h1>Ramiro Renteria</h1>
                <h4>Full Stack Web Developer</h4>
                <h5><Link to='/contact' className='contact--edit' aria-label="Contact Ramiro Renteria">Contact</Link></h5>
                <hr></hr>
                <div className="myDetails">
                    <section aria-labelledby="about-heading">
                        <h2 id="about-heading">About</h2>
                        <p>Welcome to my website! I'm a passionate Full Stack developer with a deep fascination for web development.
                            I thrive on staying up-to-date with the latest technologies and best practices in the ever-evolving world of web development.
                            Exploring new horizons and embracing continuous learning are integral parts of my journey.
                            I'm excited to showcase my skills and share my experiences as I strive to create captivating and user-friendly web experiences.
                            Join me as I push the boundaries of what's possible on the web!
                        </p>
                    </section>
                    <section aria-labelledby="interests-heading">
                        <h2 id="interests-heading">Interests</h2>
                        <p>New emerging technologies. Open to all kinds of music. Gamer. Outdoorsy. SciFi movie geek. 90's music. Traveling. Baseball.</p>
                    </section>
                    <section aria-labelledby="achievements-heading">
                        <h2 id="achievements-heading">Achievements</h2>
                        <ul className='cert-styling'>
                            <li><a href='/certificates/Ramiro Renteria-Student-ID-22324-Full Stack Web-App Development Course.pdf' target="_blank" rel="noopener noreferrer" aria-label="Full Stack Web-App Development Course Certificate">Full Stack Cert</a></li>
                            <li><a href='/certificates/Ramiro Renteria-Student-ID-22324-Front End Web-App Development Course.pdf' target="_blank" rel="noopener noreferrer" aria-label="Front End Web-App Development Course Certificate">Front End Cert</a></li>
                            <li><a href='/certificates/Ramiro Renteria-Student-ID-22324-Intro to Back-End Web-Development Module.pdf' target="_blank" rel="noopener noreferrer" aria-label="Intro to Back-End Web-Development Module Certificate">Back End Cert</a></li>
                            <li><a href='/certificates/ResumeMostCurrent1.pdf' target="_blank" rel="noopener noreferrer" aria-label="Ramiro Renteria Resume">Resume</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
};