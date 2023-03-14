import React from "react";
import jumbobackground from "../../assets/images/image3.jpg";
import "../../assets/styles.css";
import avatar from "../../assets/images/profile-pic.jpg"

// inline styles
const jumbostyle = {
  height:"600px",
  backgroundImage: `url(${jumbobackground})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

function Home() {
  return (
    <div>
      <div className="jumbotron" style={jumbostyle}>
      <h1 className="welcome">Welcome to my little universe</h1>
      <img className="profilepic rounded-circle" src={avatar} alt="profile img"></img>
      </div>
    </div>
  );
}

export default Home;
