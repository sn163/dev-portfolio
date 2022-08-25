import logo from './logo.svg';
import './assets/App.scss';
import './assets/theme.scss';
import About from './components/About.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <main>
      <header className="App-header">
        <Navbar />
        <About />
        <Blog />
        <Contact />
        <Projects />
        <Skills />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </main>
  );
}
