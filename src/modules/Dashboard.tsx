import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";
import NavHeader from "../components/NavHeader";
import { Routes, Route, Outlet } from "react-router-dom";
import { ParticlesModule } from "./Particles/ParticlesModule";

export default function Dashboard() {
  return (
    <div id="dashboard">
      <NavHeader />
      <Routes>
        <Route
          element={
            <div>
              <ParticlesModule type="page" />
              <Outlet />
            </div>
          }
        >
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
