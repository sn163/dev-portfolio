"use client";

import Hero from "../sections/Home";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Resume from "../sections/Resume";
import Work from "../sections/Work";
import NavHeader from "./NavHeader";
import Footer from "../sections/Footer";

export default function Dashboard() {
  return (
    <div id="dashboard">
      <NavHeader />
      <div>
        <Hero />
        <About />
        <Resume />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
