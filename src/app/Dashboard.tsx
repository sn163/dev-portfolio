"use client";

import Hero from "./_components/sections/Home";
import About from "./_components/sections/About";
import Contact from "./_components/sections/Contact";
import Resume from "./_components/sections/Resume";
import Work from "./_components/sections/Work";
import NavHeader from "./_components/sections/NavHeader";
import Footer from "./_components/sections/Footer";

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
