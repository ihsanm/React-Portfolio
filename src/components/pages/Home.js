import React from "react";
import "../../assets/styles.css";
import avatar from "../../assets/images/profile-pic.jpg"

function Home() {
  return (
    <div className="homepage">
      <img className="profilepic rounded-circle" src={avatar} alt="profile img"></img>
      <div className="aboutme">
      <h1 className="welcome">Hi i'm Ihsan and i'd like to invite you to my little universe</h1>
      <p className="welcome-p">
        Hi i'm Ihsan im a junior developer who loves coding and solving puzzles.
        I'm currently a student in the front end skills bootcamp gathering skills in html, javascript, css, react.
      </p>
      </div>
      
    </div>
  );
}

export default Home;
