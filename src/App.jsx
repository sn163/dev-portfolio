import logo from "./logo.svg";
import "./assets/App.scss";
import "./assets/theme.scss";
import About from "./components/About.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import NavHeader from "./components/NavHeader";


export default function App() {
  return (
    <main>
        <NavHeader />
        <About />
        <Blog />
        <Contact />
        <Projects />
        <Skills />
    </main>
  );
}
