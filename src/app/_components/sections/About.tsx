import Image from "next/image";
import { FadeInSection } from "../modules/FadeInSection";
import aboutMePic from "@/public/about-pic.webp";

export default function About() {
  const aboutMe = (
    <div className="bio-container flex flex-col justify-center space-y-4 p-5 md:px-8">
      <p className="bio-text">
        Technology has captivated me since my youth — spanning from building
        computers, DJing, photo/video editing, and gaming. This passion
        eventually paved the way for a fulfilling career in Software
        Engineering, where I&apos;ve garnered over three years of professional
        experience building robust software solutions across the stack.
      </p>
      <p className="bio-text">
        Fast-forward to more recent years, and I&apos;m a Software Engineer at{" "}
        <a
          href="https://www.dropps.com/"
          target="_blank"
          rel="noopener noreferrer"
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
        <div className="about-img-container flex flex-col items-center justify-center md:flex-row">
          <div className="mt-2.5 md:mt-0 md:pl-7">
            <Image
              src={aboutMePic.src}
              width={380}
              height={600}
              alt="about me pic"
            />
          </div>
        </div>
        {aboutMe}
      </FadeInSection>
    </section>
  );
}
