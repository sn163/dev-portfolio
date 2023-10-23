import { TypeAnimation } from "react-type-animation";
import { ReactComponent as GithubSVG } from "../assets/github.svg";
import { ReactComponent as LinkedinSVG } from "../assets/linkedin.svg";
import { ReactComponent as ScrollSVG } from "../assets/arrow-circle-down.svg";

export default function Home() {
  return (
    <section id="home" className="s-hero cover container-fluid flex flex-col">
      <div className="flex h-full w-full flex-col items-start justify-center px-32 pb-20">
        <div className="hero-typewriter px-20">
          <div className="hero-text text-white">
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
          <ul className="home-contact mt-1 flex space-x-4">
            <li>
              <a
                className="contact-links duration-500 ease-in-out hover:scale-125 hover:animate-pulse"
                href="https://www.linkedin.com/in/sonny-nguyen163/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinSVG className="contact-linkedin shadow" />
              </a>
            </li>
            <li>
              <a
                className="contact-links duration-500 ease-in-out hover:scale-125 hover:animate-pulse"
                href="https://github.com/sn163"
                target="_blank"
                rel="noreferrer"
              >
                <GithubSVG className="contact-github shadow" />
              </a>
            </li>
          </ul>
        </div>
        <div className="banner"></div>
      </div>

      <div className="mb-20 flex items-center justify-center">
        <a
          href="#about"
          className="s-hero__scroll-link flex items-center space-x-5 hover:motion-reduce:animate-bounce"
        >
          <ScrollSVG className="scroll-arrow" />
          <span className="scroll-text">View More</span>
        </a>
      </div>
    </section>
  );
}
