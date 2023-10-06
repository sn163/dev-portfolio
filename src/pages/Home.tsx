import { ReactComponent as Photo } from "../profile_pic.svg";
import { ReactComponent as Scroll } from "../arrow-circle-down.svg";
//import { ReactComponent as Photo } from "../portfolio_photo2.svg";
import { TypeAnimation } from "react-type-animation";
import { ParticlesModule } from "../modules/Particles/ParticlesModule";

export default function home() {
  return (
    <section
      id="home"
      className="s-hero container-fluid flex flex-col items-center justify-between"
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
          href="#about"
          className="s-hero__scroll-link flex items-center space-x-5 hover:motion-reduce:animate-bounce"
        >
          <Scroll className="scroll-arrow" />
          <span className="scroll-text">View More</span>
        </a>
      </div>
      <ParticlesModule type="page" />
    </section>
  );
}
