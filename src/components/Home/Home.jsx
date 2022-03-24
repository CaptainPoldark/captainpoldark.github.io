import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../Images/profilePic.jpg";
import Particle from "../Particles";
import HomeBottom from "./HomeBottom";
import TypeString from "./TypeString";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading-greeting">
                Hi,
              </h1>
              <h1 className="heading-name">
                I'm{" "}
                <strong className="name-name highlight">Jonathankyle</strong>
              </h1>
              <div>
                <TypeString
                  className="highlight profession"
                  style={{ padding: 50, textAlign: "left" }}
                  id="profession"
                  words={["Full-Stack Web Developer"]}
                />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={profilePic}
                alt="A picture of Jonathankyle"
                className="img-fluid profile-image"
                style={{ maxHeight: "375px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
