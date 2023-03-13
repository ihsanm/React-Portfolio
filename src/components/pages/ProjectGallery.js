import React from "react";
import Project from "./Project";
import projects from '../projects.json'

function ProjectGallery() {
  return (
    <div>
    
      <Project
      title= {projects[0].projectName}
      image = {projects[0].image}
      github= {projects[0].githubrepo}
      deployed= {projects[0].githubpages}
      description = {projects[0].description}

      />
      <Project
      title= {projects[1].projectName}
      image = {projects[1].image}
      github= {projects[1].githubrepo}
      deployed= {projects[1].githubpages}
      description = {projects[1].description}
      />

      <Project
      title= {projects[2].projectName}
      image = {projects[2].image}
      github= {projects[2].githubrepo}
      deployed= {projects[2].githubpages}
      description = {projects[2].description}
      
      />


      <Project
      title= {projects[3].projectName}
      image = {projects[3].image}
      github= {projects[3].githubrepo}
      deployed= {projects[3].githubpages}
      description = {projects[3].description}
      
      />

      <Project
      title= {projects[4].projectName}
      image = {projects[4].image}
      github= {projects[4].githubrepo}
      deployed= {projects[4].githubpages}
      description = {projects[4].description}
      
      />
      <Project
      title= {projects[5].projectName}
      image = {projects[5].image}
      github= {projects[5].githubrepo}
      deployed= {projects[5].githubpages}
      description = {projects[5].description}
      
      />
    </div>
  );
}

export default ProjectGallery;
