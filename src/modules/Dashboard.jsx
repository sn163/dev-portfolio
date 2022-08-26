import About from "./components/About.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import NavHeader from "./components/NavHeader";
import { Routes, Route } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <NavHeader />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </div>
  );
}
