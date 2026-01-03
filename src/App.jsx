import "./index.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Aboozar Khodaii</h1>
        <p className="subtitle">Software Engineer & Web Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I build and teach web development with React, Vite, and modern tools.
          I love creating educational content and sharing knowledge with the community.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>Personal Portfolio Website</li>
          <li>React + Vite Educational Projects</li>
          <li>GitHub Pages Deploy Examples</li>
        </ul>
      </section>

      <footer>
        <p>© 2026 Aboozar Khodaii</p>
      </footer>
    </div>
  );
}

export default App;
