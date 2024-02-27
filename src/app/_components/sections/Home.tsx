import { TypeAnimation } from "react-type-animation";
import githubSVG from "../../_assets/github.svg";
import linkedinSVG from "../../_assets/linkedin.svg";
import scrollSVG from "../../_assets/arrow-circle-down.svg";
import hero from "../../_assets/imgs/hero-img.webp";
import Image from "next/image";

export default function Home() {
  return (
    <section
      id="home"
      className="s-hero container-fluid flex min-h-screen flex-col justify-between px-3 pb-10 md:px-32"
      style={{
        backgroundImage: `url(${hero.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-typewriter my-auto text-xl md:text-3xl">
        <div className="hero-text text-xl text-white md:text-3xl">
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
              aria-label="LinkedIn"
            >
              <Image
                src={linkedinSVG.src}
                width={41}
                height={41}
                alt="linkedin"
                className="shadow"
              />
            </a>
          </li>
          <li>
            <a
              className="contact-links duration-500 ease-in-out hover:scale-125 hover:animate-pulse"
              href="https://github.com/sn163"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Image
                src={githubSVG.src}
                alt="github"
                width={35}
                height={35}
                className="shadow"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-10 flex items-center justify-center md:mb-20">
        <a
          href="#about"
          className="s-hero__scroll-link flex items-center space-x-5 text-base hover:motion-reduce:animate-bounce"
        >
          <Image
            src={scrollSVG.src}
            width={35}
            height={35}
            alt="scroll arrow"
          />
          <span className="scroll-text text-base ">View More</span>
        </a>
      </div>
    </section>
  );
}
