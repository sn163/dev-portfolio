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
            <>
              <ParticlesModule type="page" />
              <Outlet />
            </>
          }
        >
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Route>
        <Route
          element={
            <div>
              <ParticlesModule type="home" />
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
