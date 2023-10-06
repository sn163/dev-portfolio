import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ReactComponent as LogoActive } from "../logo-active.svg";
import { ReactComponent as Logo } from "../logo.svg";

export default function NavHeader() {
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 90 && // Adjust the offset as needed
          scrollPosition < sectionTop + sectionHeight - 50 // Adjust the offset as needed
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="md" sticky="top">
        <Container>
          <Navbar.Toggle
            className="ml-auto"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid items-center">
              <Nav.Link href="#home">
                <Navbar.Brand>
                  {activeSection === "home" || activeSection === "/" ? (
                    <LogoActive className="duration-500 ease-in-out hover:scale-125 hover:animate-pulse" />
                  ) : (
                    <Logo className="duration-500 ease-in-out hover:scale-125 hover:animate-pulse" />
                  )}
                </Navbar.Brand>
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={`ml-auto ${
                  activeSection === "about" ? "l-active" : ""
                }`}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#resume"
                className={activeSection === "resume" ? "l-active" : ""}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                href="#work"
                className={activeSection === "work" ? "l-active" : ""}
              >
                Work
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={activeSection === "contact" ? "l-active" : ""}
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
