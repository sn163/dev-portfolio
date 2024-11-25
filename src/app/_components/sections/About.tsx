import Image from "next/image";
import { FadeInSection } from "../ui/FadeInSection";
import aboutMePic from "@/public/about-pic.webp";
import { Container } from "../ui/Container";
import useCheckMobileScreen from "../utils/useCheckMobileScreen";

export default function About() {
  const isMobile = useCheckMobileScreen();
  const aboutMe = (
    <div className="flex max-w-sm flex-col space-y-4 p-5 text-base-100 md:max-w-lg md:bg-base-300 md:px-8">
      <div className="prose text-sm text-base-100 md:text-base">
        Technology has captivated me since my youth — spanning from building computers, DJing, photo/video editing, and
        gaming. This passion eventually paved the way for a fulfilling career in Software Engineering, where I&apos;ve
        garnered over three years of professional experience building robust software solutions across the stack.
      </div>
      <div className="prose text-sm text-base-100 md:text-base">
        Fast-forward to more recent years, and I&apos;m a Software Engineer at{" "}
        <a
          href="https://www.dropps.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-base-100 underline"
        >
          Dropps
        </a>{" "}
        , specializing in developing responsive UI, conducting A/B tests for optimization, improving SEO strategies, and
        ensuring website accessibility.{" "}
      </div>
      <div className="prose text-sm text-base-100 md:text-base">
        Beyond technical proficiency, I bring a dedicated work ethic and a love for continual learning. Outside of work,
        I enjoy exploring new technologies through personal projects, client website maintenance, and contributing to
        open-source initiatives.
      </div>
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
    <section id="about" className="w-full scroll-mt-16 overflow-hidden bg-[#272727]">
      <Container className="min-h-screen">
        <div className="section-title-container">
          <h2 className="section-title-light">ABOUT</h2>
          <div className="section-title-bar" />
        </div>
        <FadeInSection classProps="flex mt-10 md:my-auto md:bg-base-300 flex-col md:flex-row md:shadow-xl">
          <div className="about-img-container flex flex-col items-center justify-center md:flex-row">
            <div className="mt-2.5 md:mt-0 md:pl-7">
              {isMobile ? (
                <Image src={aboutMePic.src} width={150} height={100} alt="about me pic" />
              ) : (
                <Image src={aboutMePic.src} width={280} height={100} alt="about me pic" />
              )}
            </div>
          </div>
          {aboutMe}
        </FadeInSection>
      </Container>
    </section>
  );
}
