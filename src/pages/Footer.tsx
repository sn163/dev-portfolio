import { ListGroup } from "react-bootstrap";
import { ReactComponent as Github } from "../assets/icons/github.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
import { ReactComponent as Email } from "../assets/icons/email.svg";
import { ReactComponent as Iphone } from "../assets/icons/iphone.svg";
import { ReactComponent as Location } from "../assets/icons/location.svg";

export default function Footer() {
  return (
    <section
      id="footer"
      className="s-footer container-fluid flex flex-col items-center justify-center pb-4 pt-2"
    >
      <ListGroup horizontal className="contact-icons-group my-4">
        <ListGroup.Item>
          <Location className="contact-icons" /> Los Angeles, CA
        </ListGroup.Item>
        <ListGroup.Item>
          <Iphone className="contact-icons" /> 626-863-5972
        </ListGroup.Item>
        <ListGroup.Item>
          <Email className="contact-icons" /> sonnynguyen163@gmail.com
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            className="contact-links hover:animate-pulse"
            href="https://www.linkedin.com/in/sonny-nguyen163/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="contact-icons" /> LinkedIn
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            className="contact-links hover:animate-pulse"
            href="https://github.com/sn163"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="contact-icons" /> Github
          </a>
        </ListGroup.Item>
      </ListGroup>
      <span className="footer-text">
        Sonny Nguyen <span className="footer-year">©2023</span>
      </span>
    </section>
  );
}
