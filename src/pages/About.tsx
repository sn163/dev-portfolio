import { FadeInSection } from "../modules/FadeInSection";

export default function About() {
  const aboutMe = (
    <div className="bio-container flex flex-col justify-center space-y-4 p-5 md:px-8 md:py-5">
      <p className="bio-text">
        My name is Sonny Nguyen, and I&apos;m a Software Engineer/Developer
        based in Los Angeles, CA. My fervor lies in building robust, highly
        scalable full-stack web applications, merging visually appealing
        front-end UI with seamless and dynamic user interactions.
      </p>
      <p className="bio-text">
        My fascination with technology ignited from an early age, leading me to
        dabble in building/optimizing computers, DJing, photo/video editing, and
        gaming. This unwavering passion propelled me into a rewarding career in
        Software Engineering.
      </p>
      <p className="bio-text">
        Fast-forward to more recent years, and I&apos;ve had the privilege of
        working with a talented team on{" "}
        <a
          href="https://www.overvue.org/"
          target="_blank"
          rel="noreferrer"
          className="text-base font-bold underline"
        >
          OverVue
        </a>
        , an open-source desktop GUI. As a Software Engineer at{" "}
        <a
          href="https://www.dropps.com/"
          target="_blank"
          rel="noreferrer"
          className="text-base font-bold underline"
        >
          Dropps
        </a>
        , my duties encompassed developing versatile and engaging UI/UX
        components, prioritizing an optimal experience for our users.
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
      className="s-about container-fluid flex h-full flex-col items-center py-16 md:h-[93vh]"
    >
      <div className="section-title-container">
        <h2 className="section-title-light">ABOUT</h2>
        <div className="section-title-bar" />
      </div>
      <FadeInSection classProps="about-me-container flex mt-10 md:my-auto flex-col md:flex-row shadow-xl">
        <div className="about-img-container flex items-center justify-center md:max-h-[540px]">
          <picture className="about-img mt-7 h-full w-72 md:mt-0 md:w-[360px]">
            <source srcSet="/about-pic.jpg" type="image/webp"></source>
            <source srcSet="/about-pic.jpg"></source>
            <img alt="about me pic" src="/about-pic.jpg" className="h-auto" />
          </picture>
        </div>
        {aboutMe}
      </FadeInSection>
    </section>
  );
}
