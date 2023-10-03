import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import { ReactComponent as LogoActive } from "../logo-active.svg";
import { ReactComponent as Logo } from "../logo.svg";

export default function NavHeader() {
  const [pathname, setPathname] = useState("/");
  const [hover, setHover] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <>
      <Navbar className="min-w-fit h-16" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              activeKey="/"
              className="w-full h-14 items-center justify-content-end"
            >
              <LinkContainer to="/">
                <Navbar.Brand>
                  {hover || pathname === "/" ? (
                    <LogoActive
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                      className="items-center w-16 h-16"
                    />
                  ) : (
                    <Logo className="items-center w-16 h-16" />
                  )}
                </Navbar.Brand>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/blog">
                <Nav.Link>Blog</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/resume">
                <Nav.Link>Resume</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
