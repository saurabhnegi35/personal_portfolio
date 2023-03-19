import { useState } from 'react';

import Topbar from './components/topbar/Topbar';
import Intro from './components/Intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import Skills from './components/skills/Skills';

import './App.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState();
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Skills />
        <Portfolio />
        <Works />
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
