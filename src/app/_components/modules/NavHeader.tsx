import { useEffect, useState } from "react";
import activeLogo from "@/public/logo-active.svg";
import logo from "@/public/logo.svg";
//import { HamburgerMenuIcon } from "@radix-ui/react-icons";
//import useCheckMobileScreen from "../utils/useCheckMobileScreen";
import Image from "next/image";

export default function NavHeader() {
  const [activeSection, setActiveSection] = useState("/");
  //const isMobile = useCheckMobileScreen();

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
    <header className="fixed z-10 flex w-full flex-wrap bg-base-300 py-0.5">
      <nav className="mx-auto flex w-full max-w-[85rem] items-center justify-between shadow-lg">
        <a
          className={` ${activeSection === "home" ? "active" : ""}`}
          href="/#home"
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
        </a>
        <ul className="nav-list flex select-none text-lg text-base-200">
          <li className="nav-item">
            <a
              href="/#about"
              className={`nav-link scroll-smooth outline-none ${activeSection === "about" ? "active" : ""}`}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/#resume"
              className={`nav-link  scroll-smooth outline-none ${activeSection === "resume" ? "active" : ""}`}
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/#work"
              className={`nav-link scroll-smooth outline-none ${activeSection === "work" ? "active" : ""}`}
            >
              Work
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/#contact"
              className={`nav-link scroll-smooth outline-none ${activeSection === "contact" ? "active" : ""}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
