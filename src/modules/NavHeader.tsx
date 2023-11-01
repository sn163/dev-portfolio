import { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ReactComponent as ActiveLogo } from "../assets/logo-active.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

export default function NavHeader() {
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 90 && // Adjust the offset as needed
          scrollPosition < sectionTop + sectionHeight - 50 // Adjust the offset as needed
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
    <>
      <NavigationMenu.Root className="NavigationMenuRoot sticky top-0 flex w-screen items-center justify-center shadow-sm shadow-red-500">
        <NavigationMenu.List className="NavigationMenuList flex w-screen items-center px-20">
          <NavigationMenu.Item className="NavigationMenuItem mr-auto">
            <NavigationMenu.Link
              className="NavigationMenuLink"
              active={activeSection === "resume"}
              href="#home"
              aria-label="Home"
            >
              {activeSection === "home" || activeSection === "/" ? (
                <ActiveLogo className="p-2 duration-500 ease-in-out hover:scale-125 hover:animate-pulse" />
              ) : (
                <Logo className="p-2 duration-500 ease-in-out hover:scale-125 hover:animate-pulse" />
              )}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="NavigationMenuItem ml-auto">
            <NavigationMenu.Link
              href="#about"
              active={activeSection === "about"}
              className="NavigationMenuLink"
            >
              About
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenu.Link
              href="#resume"
              active={activeSection === "resume"}
              className="NavigationMenuLink"
            >
              Resume
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenu.Link
              href="#work"
              active={activeSection === "work"}
              className="NavigationMenuLink"
            >
              Work
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="NavigationMenuItem">
            <NavigationMenu.Link
              href="#contact"
              active={activeSection === "contact"}
              className="NavigationMenuLink"
            >
              Contact
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </>
  );
}
