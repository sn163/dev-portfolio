import ListGroup from "react-bootstrap/ListGroup";
import LazySvg from "../assets/LazySvg";

export default function Footer() {
  return (
    <section
      id="footer"
      className="s-footer container-fluid flex flex-col items-center justify-center pb-4 pt-2"
    >
      <ListGroup horizontal className="contact-icons-group my-4">
        <ListGroup.Item>
          <LazySvg svgName="LocationSVG" classProps="contact-icons" />
          Los Angeles, CA
        </ListGroup.Item>
        <ListGroup.Item>
          <LazySvg svgName="IphoneSVG" classProps="contact-icons" />
          626-863-5972
        </ListGroup.Item>
        <ListGroup.Item>
          <LazySvg svgName="EmailSVG" classProps="contact-icons" />
          sonnynguyen163@gmail.com
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            className="contact-links hover:animate-pulse"
            href="https://www.linkedin.com/in/sonny-nguyen163/"
            target="_blank"
            rel="noreferrer"
          >
            <LazySvg svgName="LinkedinSVG" classProps="contact-icons" />{" "}
            LinkedIn
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            className="contact-links hover:animate-pulse"
            href="https://github.com/sn163"
            target="_blank"
            rel="noreferrer"
          >
            <LazySvg svgName="GithubSVG" classProps="contact-icons" />
            Github
          </a>
        </ListGroup.Item>
      </ListGroup>
      <span className="footer-text">
        Sonny Nguyen <span className="footer-year">©2023</span>
      </span>
    </section>
  );
}
