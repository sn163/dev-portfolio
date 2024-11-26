import { TypeAnimation } from "react-type-animation";
import githubSVG from "@/public/github.svg";
import linkedinSVG from "@/public/linkedin.svg";
import scrollSVG from "@/public/arrow-circle-down.svg";
import portrait from "@/public/imgs/portrait.png";
import hero from "@/public/imgs/hero-bg.jpg";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

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
          <div className="flex select-none flex-col space-y-4">
            <span className="hero-text tracking-tight text-white md:text-2xl">Hi, my name is </span>
            <span className="hero-text text-3xl font-bold tracking-tighter text-primary md:text-5xl">
              Sonny Nguyen,
            </span>
            <TypeAnimation
              sequence={["Software Engineer.", 4000, "Frontend Engineer.", 4000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="inline-block whitespace-pre text-xl tracking-tight text-base-200 md:text-4xl"
            />
            <p className="max-w-xs text-wrap pt-4 font-sans text-sm text-base-200 md:max-w-xl md:text-xl">
              Based in Los Angeles, I specialize in crafting remarkable digital experiences through innovative
              development, complemented by occasional design work.
            </p>
            <ul className="flex space-x-4">
              <li>
                <Button
                  variant="link"
                  size="md"
                  href="https://www.linkedin.com/in/sonny-nguyen163/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  icon={{
                    src: linkedinSVG.src,
                    alt: "github",
                    width: 25,
                    height: 25,
                    className: "mb-0.5 mr-2",
                  }}
                >
                  LINKEDIN
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  size="md"
                  href="https://github.com/sn163"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  icon={{
                    src: githubSVG.src,
                    alt: "github",
                    width: 22,
                    height: 22,
                    className: "mb-0.5 mr-2",
                  }}
                >
                  GITHUB
                </Button>
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
            <Image src={scrollSVG.src} width={35} height={35} alt="scroll arrow" />
            <span className="scroll-text text-base">View More</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
