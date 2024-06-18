import locationSVG from "@/public/location.svg";
import iphoneSVG from "@/public/iphone.svg";
import emailSVG from "@/public/email.svg";
import githubSVG from "@/public/github.svg";
import linkedinSVG from "@/public/linkedin.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <section id="footer" className="s-footer">
      <div className="container m-auto flex min-h-28 max-w-screen-xl flex-col items-center justify-center gap-1">
        <ul className="contact-icons-group my-1">
          <li>
            <Image
              src={locationSVG.src}
              alt="location"
              height={25}
              width={25}
              className="contact-icons"
            />
            Los Angeles, CA
          </li>
          <li>
            <Image
              src={iphoneSVG.src}
              height={25}
              width={25}
              alt="phone"
              className="contact-icons"
            />
            626-863-5972
          </li>
          <li>
            <Image
              src={emailSVG.src}
              height={25}
              width={25}
              alt="email"
              className="contact-icons"
            />
            sonnynguyen163@gmail.com
          </li>
          <li>
            <a
              className="contact-links hover:animate-pulse"
              href="https://www.linkedin.com/in/sonny-nguyen163/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedinSVG.src}
                height={25}
                width={25}
                alt="linkedin"
                className="contact-icons"
              />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="contact-links hover:animate-pulse"
              href="https://github.com/sn163"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={githubSVG.src}
                height={25}
                width={25}
                alt="github"
                className="contact-icons"
              />
              Github
            </a>
          </li>
        </ul>
        <span className="text-lg text-base-100">
          Sonny Nguyen <span className="text-primary">©2024</span>
        </span>
      </div>
    </section>
  );
}
