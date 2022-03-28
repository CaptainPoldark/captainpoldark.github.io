import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { GrReactjs, GrNode, GrGraphQl } from "react-icons/gr";
import {
  SiMongodb,
  SiNextdotjs,
  SiAmazonaws,
  SiMicrosoftazure,
} from "react-icons/si";
import { FaGitSquare, FaDocker, FaDigitalOcean } from "react-icons/fa";
import { DiHeroku } from "react-icons/di";

function AboutContent() {
  return (
    <Container fluid>
      <Card className="about-card">
        <p style={{ textAlign: "justify" }}>
          Hey, thanks for checking out my portfolio page and for allowing me to
          answer that!
          <br />
          <br /> I'm a Senior at Kennesaw State University studying Political
          Science. I know, this isn't your typical software developer's degree
          of choice. That's the point though. I like choosing what to educate
          myself in. My path in life has lead me through extensive studies in
          Biology, Chemistry, Cybersecurity, Full-Stack Web Development, and
          Political Theory. I think that education, and a hunger to learn is
          important in any field. <i>Especially</i>
          Web Development.
          <br />
          <br />
          I'm sure you want to know more about me as a person, what I do outside
          of work, and most importantly, my technical skills. I thought I'd put
          all of that together on this page, because my interests and my work
          often intersect in some ways.
        </p>
      </Card>

      <Row>
        <Col>
          <h4>Hobbies</h4>
          <ul style={{ justifyContent: "start" }}>
            <li className="about-item">
              <VscDebugBreakpointDataUnverified
                style={{ color: "rgba(61, 18, 106, 0.97)" }}
              />
              Reading - From Plato and Rousseau to Tolkein.
            </li>
            <br />
            <li className="about-item">
              <VscDebugBreakpointDataUnverified
                style={{ color: "rgba(61, 18, 106, 0.97)" }}
              />
              Home networking and server administration
            </li>
            <br />
            <li className="about-item">
              <VscDebugBreakpointDataUnverified
                style={{ color: "rgba(61, 18, 106, 0.97)" }}
              />
              Travelling, especially globally
            </li>
            <br />
            <li className="about-item">
              <VscDebugBreakpointDataUnverified
                style={{ color: "rgba(61, 18, 106, 0.97)" }}
              />
              Singing with my toddler girls to all the Disney songs
            </li>
            <br />
            <li className="about-item">
              <VscDebugBreakpointDataUnverified
                style={{ color: "rgba(61, 18, 106, 0.97)" }}
              />
              Imagining what I would have done if I were Mehmed II while he was
              considering how to take Constantinople
            </li>
          </ul>
        </Col>
      </Row>
      <div className="skills-container">
        <Row style={{ justifyContent: "center" }}>
          <h4>Skills</h4>
          <Col md={2} className="framework-icons react">
            <GrReactjs size={"lg"} />
            <br />
            React.js
          </Col>
          <Col md={2} className="framework-icons">
            <GrNode size={"lg"} />
            <br />
            <p>Node.js</p>
          </Col>
          <Col md={2} className="framework-icons">
            <SiMongodb size={"lg"} />
            <br />
            MongoDB
          </Col>
          <Col md={2} className="framework-icons">
            <FaGitSquare size={"lg"} />
            <br />
            Git
          </Col>
          <Col md={2} className="framework-icons">
            <SiNextdotjs size={"lg"} />
            <br />
            Next.js
          </Col>
          <Col md={2} className="framework-icons">
            <GrGraphQl size={"lg"} />
            <br />
            GraphQL
          </Col>
        </Row>
      </div>
      <div className="skills-container">
        <Row style={{ justifyContent: "center" }}>
          {" "}
          <h4>Cloud</h4>
          <Col md={2} className="framework-icons">
            <SiAmazonaws size={"lg"} />
            <br />
            AWS
          </Col>
          <Col md={2} className="framework-icons">
            <FaDocker size={"lg"} />
            <br />
            <p>Docker</p>
          </Col>
          <Col md={2} className="framework-icons">
            <FaDigitalOcean size={"lg"} />
            <br />
            Digital Ocean
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AboutContent;
