import { useEffect, useState } from "react";
import activeLogo from "@/public/logo-active.svg";
import logo from "@/public/logo.svg";
// import useCheckMobileScreen from "../utils/useCheckMobileScreen";
import Image from "next/image";
import Link from "next/link";

export default function NavHeader() {
  const [activeSection, setActiveSection] = useState("/");
  // const isMobile = useCheckMobileScreen();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 65 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
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
    <header className="fixed z-10 flex w-full flex-wrap items-center justify-center bg-base-300 py-0.5">
      <nav className="container shadow-lg">
        <div className=" flex items-center justify-between">
          <Link
            className={` ${activeSection === "home" ? "active" : ""}`}
            href="#home"
            aria-label="Home"
          >
            {activeSection === "home" || activeSection === "/" ? (
              <Image
                src={activeLogo.src}
                width={80}
                height={60}
                alt="logo active"
                className="p-2 duration-500 ease-in-out hover:scale-125 hover:animate-pulse"
              />
            ) : (
              <Image
                src={logo.src}
                width={80}
                height={60}
                alt="logo"
                className="p-2 duration-500 ease-in-out hover:scale-125 hover:animate-pulse"
              />
            )}
          </Link>
          <ul className="nav-list flex select-none text-lg text-base-200">
            <li className="nav-item">
              <Link
                href="#about"
                className={`nav-link scroll-smooth outline-none ${activeSection === "about" ? "active" : ""}`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#resume"
                className={`nav-link  scroll-smooth outline-none ${activeSection === "resume" ? "active" : ""}`}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#work"
                className={`nav-link scroll-smooth outline-none ${activeSection === "work" ? "active" : ""}`}
              >
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#contact"
                className={`nav-link scroll-smooth outline-none ${activeSection === "contact" ? "active" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
