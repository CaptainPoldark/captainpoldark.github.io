import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutContent from "./AboutContent";
import GitCommits from "./GitCommits";
import { Form } from "react-bootstrap";

function About() {
  return (
    <Container fluid className="about-section">
      <Row style={{ justifyContent: "center", padding: "1rem" }}>
        <Col
          md={7}
          style={{
            justifyContent: "center",
            paddingTop: "1rem",
            paddingBottom: "1.2rem",
          }}
        >
          <h1 style={{ fontSize: "1.8rem", paddingBottom: "2%" }}>
            Who is <span className="highlight">Jonathankyle</span>?
          </h1>
          <AboutContent />
        </Col>
      </Row>
      <Row>
        <GitCommits />
      </Row>
    </Container>
  );
}

export default About;
