import React from "react";
import "../../assets/styles.css";


function Project(props) {
    return (
    
            <div className="col-sm-12 col-lg-6">
        <div className="card">
        <div className="img-container">
          <img alt={props.projectName} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
            {props.projectName}
            </li>
            <li>
         {props.githubrepo}
            </li>
            <li>
              {props.githubpages}
            </li>
          </ul>
        </div>
      </div>
      </div>
      
    );
  }
  
  export default Project