import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import ProjectList from "./project-list.json";

function ProjectCards() {
  console.log(ProjectList.projects.length);

  /*   const createCards = (project) => {
    return (
      <Card className="project-container-card">
        <Card.Img variant="top" src={project.links.image} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {project.description}
            <br />
            <br />
            <p className="project-card-tech">Made With:</p>
            {project.tech.map((tech) => {
              return `${tech}, `;
            })}
          </Card.Text>
          <Button variant="primary" href={project.links.demo}>
            Demo
          </Button>
        </Card.Body>
      </Card>
    );
  }; */
  return (
    <Container fluid>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {ProjectList.projects.map((project) => {
          return (
            <Col md={4} className="project-container-card">
              <Card className="project-card-card">
                <Card.Img variant="top" src={project.links.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="project-card-text">
                    {project.description}
                    <br />
                    <br />
                    <p className="project-card-tech">Made With:</p>
                    <Row>
                      {project.tech.map((tech) => {
                        return <Col>{tech}</Col>;
                      })}
                    </Row>
                  </Card.Text>
                  <Row>
                    <Col>
                      <Button href={project.links.demo} target="_blank" className="project-card-demobtn">
                        Demo
                      </Button>
                    </Col>
                    <Col>
                      <Button variant="secondary" href={project.links.github} target="_blank">
                        View on Github
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ProjectCards;
