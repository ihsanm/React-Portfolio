import React from "react";
import "../../assets/styles.css";


function Project(props) {
  
  
    return (
    
      //       <div className="col-sm-12 col-lg-6 main-card">
      //   <div className="card">
      //   <div className="img-container">
      //     <img className=" project-img" alt={props.projectName} src={require(`../../assets/images/`+props.image)} />
      //   </div>
      //   <div className="content">
      //     <ul>
      //       <li>
      //       {props.projectName}
      //       </li>
      //       <li>
      //    {props.githubrepo}
      //       </li>
      //       <li>
      //         {props.githubpages}
      //       </li>
      //     </ul>
      //   </div>
      // </div>
      // </div>
      <div className="card project-card">
  <img className="card-img-top" src={require(`../../assets/images/`+props.image)} alt={props.projectName}/>
  <div className="card-body">
    <h5 className="card-title about-text">{props.projectName}</h5>
    <p className="card-text about-text">{props.description}</p>
    <a href={props.githubrepo} className="btn btn-info">Repository</a>
    <a href={props.githubpages} className="btn btn-dark">Deployed</a>
  </div>
</div>
      
    );
  }
  
  export default Project