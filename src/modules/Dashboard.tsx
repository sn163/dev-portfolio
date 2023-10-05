import Hero from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Work from "../pages/Work";
import NavHeader from "../components/NavHeader";
import Footer from "../pages/Footer";

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
