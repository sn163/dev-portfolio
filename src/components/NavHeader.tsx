import { useEffect, useState } from "react";
import LazySvg from "../assets/LazySvg";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

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
      <NavigationMenu.Root className="NavigationMenuRoot sticky top-0 flex w-screen list-none items-center justify-center">
        {/* <Navbar.Toggle
            className="ml-auto"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav"> */}
        <NavigationMenu.List className="NavigationMenuList flex w-screen list-none items-center justify-center px-20 ">
          <NavigationMenu.Item className="NavigationMenuItem mr-auto">
            <NavigationMenu.Link
              className="NavigationMenuLink"
              active={activeSection === "resume"}
              href="#home"
            >
              {activeSection === "home" || activeSection === "/" ? (
                <LazySvg
                  svgName="LogoActiveSVG"
                  classProps="duration-500 ease-in-out hover:scale-125 hover:animate-pulse"
                />
              ) : (
                <LazySvg
                  svgName="LogoSVG"
                  classProps="duration-500 ease-in-out hover:scale-125 hover:animate-pulse"
                />
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
        {/* </Navbar.Collapse> */}
      </NavigationMenu.Root>
    </>
  );
}
