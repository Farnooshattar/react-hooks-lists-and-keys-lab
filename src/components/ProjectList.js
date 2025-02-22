import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log("projects",projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((projObj)=><ProjectItem key={projObj.id} name={projObj.name} about={projObj.about} technologies={projObj.technologies}/>)}</div>
    </div>
  );
}

export default ProjectList;
