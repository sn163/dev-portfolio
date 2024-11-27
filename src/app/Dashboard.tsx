"use client";

import Hero from "./_components/sections/Home";
import About from "./_components/sections/About";
import Contact from "./_components/sections/Contact";
import Resume from "./_components/sections/Resume";
import Work from "./_components/sections/Work";
import Footer from "./_components/sections/Footer";
import dynamic from "next/dynamic";

export default function Dashboard() {
  const DynamicNavHeader = dynamic(() => import("./_components/sections/NavHeader"), {
    loading: () => <p>Loading...</p>,
  });
  return (
    <div id="dashboard">
      <DynamicNavHeader />
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
