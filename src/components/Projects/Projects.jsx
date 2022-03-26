import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <div className="projects-section">
      <h1 className="highlight">Current Projects</h1>
      <p>
        Listed below are some of the projects I'm currently working. You can
        find more on my GitHub porfolio.
      </p>

      <ProjectCards />
    </div>
  );
}

export default Projects;
