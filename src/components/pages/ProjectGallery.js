import React from "react";

function ProjectGallery(props) {
  return (
    <div className="card">
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

export default ProjectGallery;
