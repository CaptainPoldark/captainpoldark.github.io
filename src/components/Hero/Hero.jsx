import { Container, Col, Row, Image } from "react-bootstrap";
import profilePic from "../../Images/profilePic.jpg";

function Hero() {
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>
            <h1 className="hero-heading">
              <span className="highlight">hi, </span>i'm jonathankyle
            </h1>
          </Col>
          <Col>
            <div className="hover-overlay">
              <Image
                src={profilePic}
                alt="my profile picture"
                fluid
                roundedCircle
              />
              <a href="#!">
                <div
                  className="mask overlay"
                  style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                ></div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
