import { TypeAnimation } from "react-type-animation";
import githubSVG from "@/public/github.svg";
import linkedinSVG from "@/public/linkedin.svg";
import scrollSVG from "@/public/arrow-circle-down.svg";
import portrait from "@/public/imgs/portrait.png";
import Image from "next/image";

export default function Home() {
  return (
    <section
      id="home"
      className="s-hero cover container-fluid flex min-h-screen flex-col justify-between  px-3 pb-10 md:px-20"
    >
      <div className="m-auto flex items-center">
        <div className="hero-typewriter flex flex-col space-y-4">
          <span className="hero-text text-xl tracking-tight text-white md:text-3xl">
            Hi, my name is{" "}
          </span>
          <span className="text-7xl font-bold tracking-tighter text-primary">
            Sonny Nguyen,
          </span>
          <TypeAnimation
            sequence={["Software Engineer.", 4000, "Frontend Engineer.", 4000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="inline-block whitespace-pre font-sans text-5xl text-base-200"
          />
          <p className="max-w-xl pt-4 font-sans text-2xl text-base-200">
            Based in Los Angeles, I specialize in crafting remarkable digital
            experiences through innovative development, complemented by
            occasional design work.
          </p>
          <ul className="home-contact flex space-x-4">
            <li>
              <a
                className="contact-links duration-500 ease-in-out hover:scale-125 hover:animate-pulse"
                href="https://www.linkedin.com/in/sonny-nguyen163/"
                target="_blank"
                rel="noopener noreferrer"
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
                rel="noopener noreferrer"
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
        <Image
          className="mt-24 inline-block p-8 md:mt-0 md:p-0"
          src={portrait}
          alt="portrait"
          width={520}
          height={280}
        />
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
