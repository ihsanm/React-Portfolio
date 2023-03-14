import React from "react";
import "../../assets/styles.css";


function Project(props) {
  
  
    return (
    
      
      <div className="card project-card">
  <img className="card-img-top" src={require(`../../assets/images/`+props.image)} alt={props.projectName}/>
  <div className="card-body">
    <h5 className="card-title text">{props.projectName}</h5>
    <p className="card-text text">{props.description}</p>
    <a href={props.githubrepo} className="btn btn-info">Repository</a>
    <a href={props.githubpages} className="btn btn-dark">Deployed</a>
  </div>
</div>
      
    );
  }
  
  export default Project