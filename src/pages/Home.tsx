import { Button, Container } from "react-bootstrap";
import { ReactComponent as Photo } from "../profile_pic.svg";
import { ReactComponent as Scroll } from "../arrow-circle-down.svg";
//import { ReactComponent as Photo } from "../portfolio_photo2.svg";
import { TypeAnimation } from "react-type-animation";

export default function home() {
  return (
    <Container
      id="home"
      className="s-hero flex flex-col items-center justify-between target-section"
      fluid
    >
      <div className="flex items-center space-x-32">
        <div className="hero-typewriter">
          <div className="text-light hero-text">
            Hi, I&apos;m <span style={{ color: "#ff4d59" }}>Sonny</span>
          </div>
          <TypeAnimation
            sequence={[
              "Full-stack Software Engineer.",
              4000,
              "Full-stack Software Developer.",
              4000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              color: "#ffffff",
              whiteSpace: "pre-line",
              display: "inline-block",
            }}
          />
        </div>
        <div className="banner">
          <Photo className="profile-img img-fluid rounded" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="#resume"
          className="s-hero__scroll-link hover:motion-reduce:animate-bounce flex items-center space-x-5"
        >
          <Scroll className="scroll-arrow" />
          <span className="scroll-text">View More</span>
        </a>
      </div>
    </Container>
  );
}
