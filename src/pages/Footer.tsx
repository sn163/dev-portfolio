import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container
      id="footer"
      className="s-footer flex items-center justify-center p-8"
      fluid
    >
      <span className="footer-text">
        Sonny Nguyen <span className="footer-year">©2023</span>
      </span>
    </Container>
  );
}
