import React from "react";
import "../../assets/styles.css";
import avatar from "../../assets/images/profile-pic.jpg"

function About() {
  return (
    <section className="about-div">
      <div>
      <img className="profilepic rounded-circle" src={avatar} alt="profile img"></img>
      <h1 className="about-heading">About Me</h1>
      <p className="about-text">
        Hi i'm Ihsan im a junior developer who loves coding and solving puzzles.
        I'm currently a student in the front end skills bootcamp gathering skills in html, javascript, css, react.
      </p>
      </div>
      
    </section>
  );
}

export default About;
