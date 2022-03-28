import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

function HomeBottom() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.4rem" }}>
            A BIT ABOUT <span className="highlight">ME</span>
          </h1>
          <figure className="quote">
            <blockquote>"Impatience for victory guarantees defeat"</blockquote>
            <figcaption>&mdash; Louis XIV</figcaption>
          </figure>
          <p className="home-about-body">
            <br />
            <br />
            I didn't fall in love with programming. I fell in love with what it
            can do and endeavour to take full advantage of it.
            <br />
            <br />I am fluent in{" "}
            <b className="highlight">
              <i>Javascript</i>
            </b>
            , and have dabbled in a bit of C# and python on the side.
            <br /> <br />
            My main focus is building new{" "}
            <b className="highlight">
              <i>Web Products</i>
            </b>{" "}
            and working with blockchain technology
            <br />
            <br />
            When possible, I like to apply my skills developing products in
            using{" "}
            <b className="highlight">
              <i>Node.js</i>
            </b>{" "}
            and especially using modern Javascript Frameworks such as{" "}
            <b className="highlight">
              <i>React</i></b> and <b className="highlight"><i>Next.js</i>
            </b>
          </p>
        </Col>
      </Container>
    </Container>
  );
}

export default HomeBottom;
