import { Container } from "react-bootstrap";
import { ReactComponent as Photo } from "../portfolio-pic.svg";

export default function About() {
  const aboutMe =
    "My name is Sonny Nguyen, and I'm a Software Engineer/Developer currently based in Los Angeles, CA. My fervor lies in proficiently building robust and highly scalable full-stack web applications, where I merge visually stunning front-end user interfaces with seamless and dynamic user interactions utilizing a versatile toolkit that encompasses a broad spectrum of programming languages and frameworks. Adding a touch of rhythm to my life, I also have a passion for music as a DJ—a fun fact that underscores my unique blend of analytical thinking and artistic expression, serving as one of the driving forces behind my programming career. Whether it's writing lines of code that power applications or curating a sonic journey, My goal is to continuously push the limits and create remarkable solutions to address urgent issues, empower future communities, and make a positive impact on people's lives.";

  return (
    <Container id="about" className="s-about" fluid>
      <div className="flex flex-col items-center">
        <h2 className="section-title-light">ABOUT</h2>
        <div className="section-title-bar" />
      </div>
      <div className="flex about-me-container items-center mx-40 my-20 pr-20 rounded-xl">
        <Photo className="portfolio-img" />
        <div className="flex flex-col item-center max-w-xl justify-center">
          <div className="about-me my-10 text-dark">{aboutMe}</div>
          <span className="connect-txt text-center">
            Let&apos;s{" "}
            <span className="">
              <a href="#contact" className="hover:animate-pulse">
                Connect
              </a>
            </span>{" "}
            !
          </span>
        </div>
      </div>
    </Container>
  );
}
