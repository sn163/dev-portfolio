import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
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
      <Navbar collapseOnSelect expand="md" sticky="top">
        <Container>
          <Navbar.Toggle
            className="ml-auto"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="items-center container-fluid">
              <Nav.Link href="#home">
                <Navbar.Brand>
                  {hover || pathname === "home" ? (
                    <LogoActive
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                      className="hover:scale-125 ease-in-out duration-500 hover:animate-pulse"
                    />
                  ) : (
                    <Logo className="hover:scale-125 ease-in-out duration-500 hover:animate-pulse" />
                  )}
                </Navbar.Brand>
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={`ml-auto ${pathname === "about" ? "l-active" : ""}`}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#resume"
                className={pathname === "resume" ? "l-active" : ""}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                href="#work"
                className={pathname === "work" ? "l-active" : ""}
              >
                Work
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={pathname === "contact" ? "l-active" : ""}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
