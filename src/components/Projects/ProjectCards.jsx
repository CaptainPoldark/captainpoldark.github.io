import React from "react";
import {
  Container,
  Col,
  Row,
  Card,
  Button,
  Popover,
  OverlayTrigger,
  Table,
} from "react-bootstrap";
import ProjectList from "./project-list.json";

function ProjectCards() {
  console.log(ProjectList.projects.length);

  /*   const CredsPopover = (props) => {
    return (
      <Popover id="creds-popover" {...props}>
        <Popover.Header as="h4">Demo Credentials</Popover.Header>
        <Popover.Body>
          Username: {props.credentials.username}
          <br />
          Password: {props.credentials.password}
        </Popover.Body>
      </Popover>
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
                      <Button
                        href={project.links.demo}
                        target="_blank"
                        className="project-card-demobtn"
                      >
                        Demo
                      </Button>
                    </Col>
                    {/*                     <Col>
                      <OverlayTrigger
                        trigger="click"
                        placement="left"
                        overlay={
                          <CredsPopover credentials={project.demoCreds} />
                        }
                      >
                        <Button variant="primary">Demo Credentials </Button>
                      </OverlayTrigger>
                    </Col> */}
                    <Col>
                      <Button
                        variant="secondary"
                        href={project.links.github}
                        target="_blank"
                      >
                        View on Github
                      </Button>
                    </Col>
                  </Row>

                  {project.demoCreds.username || project.demoCreds.password ? (
                    <div className="project-credentials-table">
                      <Row>
                        <Table striped borderless hover variant="dark">
                          <thead>
                            <tr>
                              <th>Demo Credentials</th>
                              <th>Username</th>
                              <th>Password</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td>{project.demoCreds.username}</td>
                              <td>{project.demoCreds.password}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Row>
                    </div>
                  ) : (
                    ""
                  )}
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
