import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Intro from './components/Intro.jsx'
import Portfolio from './components/Portfolio.jsx'

export default function App() {
  const [sections, setSections] = useState([{title: '', href: '#', element: Element, offsetFunc: Function}])

  const scrollToOffset = (offset) => {
    window.scrollTo({top: offset - 75})
  }

  useEffect(() => {
    let elements = document.querySelectorAll('.section')
    let sections = [...elements].map(section => (
      {title: section.id, href: '#' + section.id, element: section, offsetFunc: () => scrollToOffset(section.offsetTop)}
    ))
    setSections(sections)
  }, [])

  return (
    <div className='App'>
      <Header sections={sections}/>
      <Home sections={sections}/>
      <Intro sections={sections}/>
      <Portfolio />
      <div className='section' id='Resume' style={{height:'1000px', backgroundColor:'white'}}>
        <div style={{height:'100%', width:'1%', backgroundColor:'#EFE7E7', marginInline:'auto'}}></div>
      </div>
      <div className='section' id='Contact' style={{height:'1000px', backgroundColor:'#EFE7E7'}}>
        <div style={{height:'100%', width:'1%', backgroundColor:'white', marginInline:'auto'}}></div>
      </div>
    </div>
  )
}
