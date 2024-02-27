"use client";

import { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import activeLogo from "../../_assets/logo-active.svg";
import logo from "../../_assets/logo.svg";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import useCheckMobileScreen from "../utils/useCheckMobileScreen";
import Image from "next/image";

export default function NavHeader() {
  const [activeSection, setActiveSection] = useState("/");
  const isMobile = useCheckMobileScreen();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 65 && // Adjust the offset as needed
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

  const navMobile = (
    <NavigationMenu.List className="NavigationMenuList space-between flex w-screen items-center px-5">
      <NavigationMenu.Item className="NavigationMenuItem mr-auto">
        <NavigationMenu.Link
          className="NavigationMenuLink"
          active={activeSection === "home" || activeSection === "/"}
          href="#home"
          aria-label="Home"
        >
          {activeSection === "home" || activeSection === "/" ? (
            <Image
              src={activeLogo.src}
              width={80}
              height={60}
              alt="logo active"
              className="p-4"
            />
          ) : (
            <Image
              width={80}
              height={60}
              alt="logo"
              src={logo.src}
              className="p-4"
            />
          )}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item className="ml-auto">
        <NavigationMenu.Trigger
          onPointerMove={(event) => event.preventDefault()}
          onPointerLeave={(event) => event.preventDefault()}
          className="NavigationMenuTrigger rounded"
        >
          <HamburgerMenuIcon className="text-light h-6 w-6" />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content className="NavigationMenuContent mx-10">
          <NavigationMenu.Item className="NavigationMenuItem">
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
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  );
  return (
    <NavigationMenu.Root className="NavigationMenuRoot fixed top-0 h-16 shadow-sm shadow-red-500">
      {isMobile ? (
        navMobile
      ) : (
        <NavigationMenu.List className="NavigationMenuList space-between flex h-16 w-screen items-center px-20">
          <NavigationMenu.Item className="NavigationMenuItem mr-auto">
            <NavigationMenu.Link
              className="NavigationMenuLink"
              active={activeSection === "home" || activeSection === "/"}
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
      )}

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
}
