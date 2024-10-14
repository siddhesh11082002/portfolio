import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header with Navigation */}
      <Header />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />
      
      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer (optional for credits or extra info) */}
      <footer className="footer">
        <p>&copy; 2024 Siddhesh Talawadekar. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
