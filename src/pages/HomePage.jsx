import { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Home from '../components/Home.jsx';
import Intro from '../components/Intro.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Education from '../components/Education.jsx';
import Contact from '../components/Contact.jsx';

export default function HomePage() {
  const [sections, setSections] = useState([{ title: '', element: Element, offsetFunc: Function }]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((prev) => !prev);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToOffset = (offset) => {
    window.scrollTo({ top: offset - (windowWidth <= 900 ? 60 : 75) });
  };

  useEffect(() => {
    let elements = document.querySelectorAll('.section');
    let sections = [...elements].map((section) => ({ title: section.id, element: section, offsetFunc: () => scrollToOffset(section.offsetTop) }));
    setSections(sections);
  }, []);

  return (
    <div className='App' onClick={navOpen ? toggleNav : () => {}}>
      <Header sections={sections} navOpen={navOpen} toggleNav={toggleNav} />
      <Home sections={sections} />
      <Intro sections={sections} />
      <Education />
      <Portfolio windowWidth={windowWidth} />
      <Contact />
    </div>
  );
}
