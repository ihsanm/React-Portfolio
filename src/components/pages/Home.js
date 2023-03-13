import React from "react";
import jumbobackground from "../../assets/image3.jpg";
import "../../assets/styles.css";

// inline styles
const jumbostyle = {
  height:"500px",
  backgroundImage: `url(${jumbobackground})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

function Home() {
  return (
    <div>
      <div className="jumbotron" style={jumbostyle}>
      <h1 className="welcome">Welcome to my little universe</h1>
      </div>
    </div>
  );
}

export default Home;
