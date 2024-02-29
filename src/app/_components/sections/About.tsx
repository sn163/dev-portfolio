import Image from "next/image";
import { FadeInSection } from "../modules/FadeInSection";
import aboutMePic from "@/public/about-pic.webp";

export default function About() {
  const aboutMe = (
    <div className="bio-container flex flex-col justify-center space-y-4 p-5 md:mt-2 md:px-8 md:py-5">
      <p className="bio-text">
        I&apos;m Sonny Nguyen, a Software Engineer in Los Angeles, CA, with over
        three years&apos; professional experience building robust software
        solutions across the stack.
      </p>
      <p className="bio-text">
        Technology has captivated me since my youth — spanning from building
        computers, DJing, photo/video editing, and gaming. This drive eventually
        led me towards a fulfilling career in Software Engineering.
      </p>
      <p className="bio-text">
        Fast-forward to more recent years, and I&apos;m a Software Engineer at{" "}
        <a
          href="https://www.dropps.com/"
          target="_blank"
          rel="noreferrer"
          className="text-base font-bold underline"
        >
          Dropps
        </a>{" "}
        , specializing in developing responsive UI, conducting A/B tests for
        optimization, improving SEO strategies, and ensuring website
        accessibility.{" "}
      </p>
      <p className="bio-text">
        Beyond technical proficiency, I bring a dedicated work ethic and a love
        for continual learning. Outside of work, I enjoy exploring new
        technologies through personal projects, client website maintenance, and
        contributing to open-source initiatives.
      </p>
      <div className="connect-txt text-center">
        Let&apos;s{" "}
        <span>
          <a href="#contact" className="hover:animate-pulse">
            Connect
          </a>
        </span>
        !
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className="s-about container-fluid flex min-h-screen flex-col items-center py-16"
    >
      <div className="section-title-container">
        <h2 className="section-title-light">ABOUT</h2>
        <div className="section-title-bar" />
      </div>
      <FadeInSection classProps="about-me-container flex mt-10 md:my-auto flex-col md:flex-row shadow-xl">
        <div className="about-img-container flex items-center justify-center md:max-h-[540px]">
          <div className="about-img mt-7 md:ml-7 md:mt-0 md:w-[360px]">
            <Image
              src={aboutMePic.src}
              fill
              style={{ objectFit: "contain" }}
              alt="about me pic"
            />
          </div>
        </div>
        {aboutMe}
      </FadeInSection>
    </section>
  );
}
