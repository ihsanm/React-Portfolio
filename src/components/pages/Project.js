import React from "react";
import "../../assets/styles.css";

function Project(props) {
    return (
      <div className="card container col-lg-3">
        <div className="img-container">
          <img alt={props.projectName} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong></strong> {props.projectName}
            </li>
            <li>
              <strong>Repo</strong> {props.githubrepo}
            </li>
            <li>
              <strong>Pages</strong> {props.githubpages}
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Project