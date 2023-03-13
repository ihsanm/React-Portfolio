import React from "react";
import Project from "./Project";
import projects from '../projects.json';
import "../../assets/styles.css";

function ProjectGallery() {
  return (
    <div className="projects-div">
    
      <Project
      projectName= {projects[0].projectName}
      image = {projects[0].image}
      githubrepo= {projects[0].githubrepo}
      githubpages= {projects[0].githubpages}
      description = {projects[0].description}

      />
      <Project
      projectName= {projects[1].projectName}
      image = {projects[1].image}
      githubrepo= {projects[1].githubrepo}
      githubpages= {projects[1].githubpages}
      description = {projects[1].description}
      />

      <Project
      projectName= {projects[2].projectName}
      image = {projects[2].image}
      githubrepo= {projects[2].githubrepo}
      githubpages= {projects[2].githubpages}
      description = {projects[2].description}
      
      />


      <Project
      projectName= {projects[3].projectName}
      image = {projects[3].image}
      githubrepo= {projects[3].githubrepo}
      githubpages= {projects[3].githubpages}
      description = {projects[3].description}
      
      />

      <Project
      projectName= {projects[4].projectName}
      image = {projects[4].image}
      githubrepo= {projects[4].githubrepo}
      githubpages= {projects[4].githubpages}
      description = {projects[4].description}
      
      />
      <Project
      projectName= {projects[5].projectName}
      image = {projects[5].image}
      githubrepo= {projects[5].githubrepo}
      githubpages= {projects[5].githubpages}
      description = {projects[5].description}
      
      />
    </div>
  );
}

export default ProjectGallery;
