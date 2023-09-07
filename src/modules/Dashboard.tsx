import Home from "../components/Home";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import NavHeader from "../components/NavHeader";
import { Routes, Route } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <NavHeader />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
