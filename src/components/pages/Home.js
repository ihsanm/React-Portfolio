import React from "react";
import jumbobackground from "../../assets/image2.jpg"

// inline styles
const jumbostyle = {
  height:"500px",
  backgroundImage: `url(${jumbobackground})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}

function Home() {
  return (
    <div>
      <div className="jumbotron banner" style={jumbostyle}>
      <h1>Welcome to my little universe</h1>
      </div>
    </div>
  );
}

export default Home;
