import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import {
  AiFillStar,
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineCode,
  AiOutlineUser,
  AiOutlineGithub,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";

export default function Navigation() {
  const [expandNav, setExpandNav] = useState(false);
  const [blurredNav, setBlurredNav] = useState(false);

  const getScroll = () => {
    const position = window.scrollY;

    setBlurredNav(position >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", getScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", getScroll);
    };
  }, []);

  return (
    <Navbar
      expanded={expandNav}
      fixed="top"
      expand="md"
      className={blurredNav ? "navbar blurred" : "navbar"}
      placement="end"
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          Make a Logo bro
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-nav"
          onClick={() => setExpandNav(expandNav ? false : "expand")}
          className="navbar-item"
        >
          <AiOutlineMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => setExpandNav(false)}
                className="navbar-item"
              >
                <AiOutlineHome style={{ marginBottom: "3px" }} />
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpandNav(false)}
                className="navbar-item"
              >
                <FaRegUserCircle style={{ marginBottom: "3px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => setExpandNav(false)}
                className="navbar-item"
              >
                <AiOutlineCode style={{ marginBottom: "3px" }} />
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => setExpandNav(false)}
                className="navbar-item"
              >
                <CgFileDocument style={{ marginBottom: "3px" }} />
                Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navbar-item">
              <Nav.Link
                href="https://github.com/CaptainPoldark"
                target="_blank"
                className="navbar-item"
              >
                <AiOutlineGithub style={{ fontSize: "1.3rem" }} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
