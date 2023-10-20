import LazySvg from "../assets/LazySvg";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section
      id="home"
      className="s-hero cover container-fluid flex flex-col items-center justify-around"
    >
      <div className="flex items-center justify-between">
        <div className="hero-typewriter">
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
        </div>
        <div className="banner">
          <LazySvg svgName="PortfolioSVG" classProps="portfolio-img" />
        </div>
      </div>
      <div className="mb-14 flex">
        <a
          href="#about"
          className="s-hero__scroll-link flex items-center space-x-5 hover:motion-reduce:animate-bounce"
        >
          <LazySvg svgName="ScrollSVG" classProps="scroll-arrow" />
          <span className="scroll-text">View More</span>
        </a>
      </div>
    </section>
  );
}
