import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Work from "../pages/Work";
import NavHeader from "../components/NavHeader";
import { ParticlesModule } from "./Particles/ParticlesModule";
import Hero from "../pages/Home";

export default function Dashboard() {
  return (
    <div id="dashboard">
      <NavHeader />
      <div>
        <ParticlesModule type="page" />
        <Hero />
        <About />
        <Blog />
        <Resume />
        <Work />
        <Contact />
      </div>
    </div>
  );
}
