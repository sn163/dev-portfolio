import LazySvg from "../assets/LazySvg";

export default function Footer() {
  return (
    <section
      id="footer"
      className="s-footer container-fluid flex flex-col items-center justify-center gap-1"
    >
      <ul className="contact-icons-group my-1">
        <li>
          <LazySvg svgName="LocationSVG" classProps="contact-icons" />
          Los Angeles, CA
        </li>
        <li>
          <LazySvg svgName="IphoneSVG" classProps="contact-icons" />
          626-863-5972
        </li>
        <li>
          <LazySvg svgName="EmailSVG" classProps="contact-icons" />
          sonnynguyen163@gmail.com
        </li>
        <li>
          <a
            className="contact-links hover:animate-pulse"
            href="https://www.linkedin.com/in/sonny-nguyen163/"
            target="_blank"
            rel="noreferrer"
          >
            <LazySvg svgName="LinkedinSVG" classProps="contact-icons" />{" "}
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="contact-links hover:animate-pulse"
            href="https://github.com/sn163"
            target="_blank"
            rel="noreferrer"
          >
            <LazySvg svgName="GithubSVG" classProps="contact-icons" />
            Github
          </a>
        </li>
      </ul>
      <span className="footer-text">
        Sonny Nguyen <span className="footer-year">©2023</span>
      </span>
    </section>
  );
}
