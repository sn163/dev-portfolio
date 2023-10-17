import ListGroup from "react-bootstrap/ListGroup";
import { ReactComponent as Photo } from "../portfolio-pic.svg";
import { ReactComponent as JavascriptIcon } from "../assets/icons/javascript.svg";
import { ReactComponent as TypescriptIcon } from "../assets/icons/typescript.svg";
import { ReactComponent as VueIcon } from "../assets/icons/vue.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as NodeIcon } from "../assets/icons/node-js.svg";

export default function About() {
  const aboutMe =
    "My name is Sonny Nguyen, and I'm a Software Engineer/Developer currently based in Los Angeles, CA. My fervor lies in proficiently building robust and highly scalable full-stack web applications, where I merge visually stunning front-end user interfaces with seamless and dynamic user interactions utilizing a versatile toolkit that encompasses a broad spectrum of programming languages and frameworks. Adding a touch of rhythm to my life, I also have a passion for music as a DJ—a fun fact that underscores my unique blend of analytical thinking and artistic expression, serving as one of the driving forces behind my programming career. Whether it's writing lines of code that power applications or curating a sonic journey, my goal is to continuously push the limits and create remarkable solutions to address urgent issues, empower future communities, and make a positive impact on people's lives.";

  return (
    <section
      id="about"
      className="s-about container-fluid flex-col items-center justify-center"
    >
      <div className="mb-10 flex flex-col items-center">
        <h2 className="section-title-light">ABOUT</h2>
        <div className="section-title-bar" />
      </div>
      <div className="about-me-container m-auto flex items-center rounded-lg">
        <div className="flex flex-col items-center">
          <Photo className="portfolio-img" />
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
        <div className="item-center flex flex-col justify-center py-4">
          <div className="about-me text-dark my-10 px-1">{aboutMe}</div>
          <ListGroup className="skills-icon-group" horizontal>
            <ListGroup.Item>
              <JavascriptIcon className="skills-icon" />
            </ListGroup.Item>
            <ListGroup.Item>
              <TypescriptIcon className="skills-icon" />
            </ListGroup.Item>
            <ListGroup.Item>
              <ReactIcon className="skills-icon" />
            </ListGroup.Item>
            <ListGroup.Item>
              <VueIcon className="skills-icon" />
            </ListGroup.Item>
            <ListGroup.Item>
              <NodeIcon className="skills-icon" />
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </section>
  );
}
