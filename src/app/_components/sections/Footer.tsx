import { Linkedin, Smartphone, Mail, GitHub, MapPin } from "react-feather";

export default function Footer() {
  return (
    <section id="footer" className="s-footer">
      <div className="container m-auto flex min-h-28 max-w-screen-xl flex-col items-center justify-center gap-1">
        <ul className="contact-icons-group my-1">
          <li>
            <MapPin size={21} className="mr-2" color="#ff4d59" />
            Los Angeles, CA
          </li>
          <li>
            <Smartphone size={22} className="mr-2" color="#ff4d59" />
            626-863-5972
          </li>
          <li>
            <Mail size={22} className="mr-2" color="#ff4d59" />
            sonnynguyen163@gmail.com
          </li>
          <li>
            <a
              className="contact-links hover:animate-pulse"
              href="https://www.linkedin.com/in/sonny-nguyen163/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={22} className="mr-2" color="#ff4d59" />
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
              <GitHub size={21} className="mr-2" color="#ff4d59" />
              Github
            </a>
          </li>
        </ul>
        <span className="text-lg text-base-100">
          Sonny Nguyen <span className="text-primary">©2024</span> All rights reserved.
        </span>
      </div>
    </section>
  );
}
