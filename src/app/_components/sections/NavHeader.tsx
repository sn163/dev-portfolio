import { useEffect, useState } from "react";
import activeLogo from "@/public/logo-active.svg";
import logo from "@/public/logo.svg";
// import useCheckMobileScreen from "../utils/useCheckMobileScreen";
import Image from "next/image";
import Link from "next/link";
import { Monitor, User, FileText, Mail } from "react-feather";

export default function NavHeader() {
  const [activeSection, setActiveSection] = useState("/");
  // const isMobile = useCheckMobileScreen();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 4; // add 4px for border width
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-10 flex h-screen w-56 flex-col bg-base-300 p-4">
      <nav className="container flex h-full flex-col">
        <Link className={` ${activeSection === "home" ? "active" : ""}`} href="#home" aria-label="Home">
          {activeSection === "home" || activeSection === "/" ? (
            <Image
              src={activeLogo.src}
              width={150}
              height={150}
              alt="logo active"
              className="mx-auto p-2 duration-500 ease-in-out hover:scale-125 hover:animate-pulse"
            />
          ) : (
            <Image
              src={logo.src}
              width={150}
              height={150}
              alt="logo"
              className="mx-auto p-2 duration-500 ease-in-out hover:scale-125 hover:animate-pulse"
            />
          )}
        </Link>
        <div className="flex h-full flex-col items-center justify-center">
          <ul className="nav-list flex h-full w-full select-none flex-col items-center justify-center space-y-20 text-lg text-base-200">
            <li className="w-full">
              <Link
                href="#about"
                className={`group space-y-2 scroll-smooth text-base-200 outline-none duration-500 ease-in-out hover:text-primary ${activeSection === "about" ? "text-primary" : "text-base-200"}`}
              >
                <h3 className="text-center text-xl font-bold">ABOUT</h3>
                <div className="flex items-center justify-center">
                  <span
                    className={`max-w-8 flex-grow border-t border-base-200 duration-500 ease-in-out  group-hover:border-primary ${activeSection === "about" ? "border-primary" : "border-base-200"}`}
                  />
                  <User className="mx-3" size={20} />
                  <span
                    className={`max-w-8 flex-grow border-t border-base-200 duration-500 ease-in-out  group-hover:border-primary ${activeSection === "about" ? "border-primary" : "border-base-200"}`}
                  />
                </div>
                <h6 className="text-center text-sm italic">READ BIO</h6>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="#resume"
                className={`group space-y-2 scroll-smooth text-base-200 outline-none duration-500 ease-in-out hover:text-primary ${activeSection === "resume" ? "text-primary" : "text-base-200"}`}
              >
                <h3 className="text-center text-xl font-bold">RESUME</h3>
                <div className="flex items-center justify-center">
                  <span
                    className={`max-w-8 flex-grow border-t border-base-200 duration-500 ease-in-out  group-hover:border-primary ${activeSection === "resume" ? "border-primary" : "border-base-200"}`}
                  />
                  <FileText className="mx-3" size={20} />
                  <span
                    className={`max-w-8 flex-grow border-t border-base-200 duration-500 ease-in-out  group-hover:border-primary ${activeSection === "resume" ? "border-primary" : "border-base-200"}`}
                  />
                </div>
                <h6 className="text-center text-sm italic">VIEW EXPERIENCE</h6>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="#work"
                className={`group space-y-2 scroll-smooth text-base-200 outline-none duration-500 ease-in-out hover:text-primary ${activeSection === "work" ? "text-primary" : "text-base-200"}`}
              >
                <h3 className="text-center text-xl font-bold">WORK</h3>
                <div className="flex items-center justify-center">
                  <span
                    className={`max-w-8 flex-grow border-t border-base-200 duration-500 ease-in-out  group-hover:border-primary ${activeSection === "work" ? "border-primary" : "border-base-200"}`}
                  />
                  <Monitor className="mx-3" size={20} />
                  <span
                    className={`max-w-8 flex-grow border-t border-base-200 duration-500 ease-in-out  group-hover:border-primary ${activeSection === "work" ? "border-primary" : "border-base-200"}`}
                  />
                </div>
                <h6 className="text-center text-sm italic">BROWSE PROJECTS</h6>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="#contact"
                className={`group space-y-2 scroll-smooth text-base-200 outline-none duration-500 ease-in-out hover:text-primary ${activeSection === "contact" ? "text-primary" : "text-base-200"}`}
              >
                <h3 className="text-center text-xl font-bold">CONTACT</h3>
                <div className="flex items-center justify-center">
                  <span
                    className={`max-w-8 flex-grow border-t border-base-200 duration-500 ease-in-out  group-hover:border-primary ${activeSection === "contact" ? "border-primary" : "border-base-200"}`}
                  />
                  <Mail className="mx-3" size={20} />
                  <span
                    className={`max-w-8 flex-grow border-t border-base-200 duration-500 ease-in-out  group-hover:border-primary ${activeSection === "contact" ? "border-primary" : "border-base-200"}`}
                  />
                </div>
                <h6 className="text-center text-sm italic">GET IN TOUCH</h6>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
