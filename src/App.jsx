import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Intro from './components/Intro.jsx'
import Portfolio from './components/Portfolio.jsx'

export default function App() {
  const [sections, setSections] = useState([{title: '', element: Element, offsetFunc: Function}])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [navOpen, setNavOpen] = useState(false)

  function toggleNav() {
    setNavOpen(prev => !prev)
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollToOffset = (offset) => {
    window.scrollTo({top: offset - (windowWidth <= 900 ? 60 : 75)})
  }

  useEffect(() => {
    let elements = document.querySelectorAll('.section')
    let sections = [...elements].map(section => (
      {title: section.id, element: section, offsetFunc: () => scrollToOffset(section.offsetTop)}
    ))
    setSections(sections)
  }, [])

  return (
    <div className='App' onClick={navOpen ? toggleNav : () => {}}>
      <Header sections={sections} navOpen={navOpen} toggleNav={toggleNav}/>
      <Home sections={sections}/>
      <Intro sections={sections}/>
      <Portfolio windowWidth={windowWidth}/>
      <div className='section' id='Resume' style={{height:'1000px', backgroundColor:'white'}}>
        <div style={{height:'100%', width:'1%', backgroundColor:'#EFE7E7', marginInline:'auto'}}></div>
      </div>
      <div className='section' id='Contact' style={{height:'1000px', backgroundColor:'#EFE7E7'}}>
        <div style={{height:'100%', width:'1%', backgroundColor:'white', marginInline:'auto'}}></div>
      </div>
    </div>
  )
}
