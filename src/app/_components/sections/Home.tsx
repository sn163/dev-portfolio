import { TypeAnimation } from "react-type-animation";
import githubSVG from "@/public/github.svg";
import linkedinSVG from "@/public/linkedin.svg";
import scrollSVG from "@/public/arrow-circle-down.svg";
import portrait from "@/public/imgs/portrait.png";
import hero from "@/public/imgs/hero-bg.jpg";
import Image from "next/image";
import { Container } from "../ui/Container";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full scroll-mt-16 overflow-hidden bg-base-300"
      style={{
        backgroundImage: `url(${hero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container className="min-h-screen px-3 pb-10 md:justify-between md:px-20">
        <div className="space-between m-auto flex items-center gap-20 px-4 md:px-0">
          <div className="hero-typewriter flex select-none flex-col space-y-4">
            <span className="hero-text tracking-tight text-white md:text-2xl">
              Hi, my name is{" "}
            </span>
            <span className="text-3xl font-bold tracking-tighter text-primary md:text-5xl">
              Sonny Nguyen,
            </span>
            <TypeAnimation
              sequence={[
                "Software Engineer.",
                4000,
                "Frontend Engineer.",
                4000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="inline-block whitespace-pre text-xl tracking-tight text-base-200 md:text-4xl"
            />
            <p className="prose max-w-xs text-wrap pt-4 font-sans text-sm text-base-200 md:max-w-xl md:text-xl">
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
            className="mx-auto h-auto w-48 max-w-sm rounded-full border-4 border-gray-950 shadow shadow-gray-950 md:w-auto"
            src={portrait}
            alt="portrait"
            width={420}
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
            <span className="scroll-text text-base">View More</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
