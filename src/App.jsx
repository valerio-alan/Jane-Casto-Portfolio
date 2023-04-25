import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'

export default function App() {
  const [sections, setSections] = useState({
    links: [],
    elements: []
  })

  useEffect(() => {
    let elements = document.querySelectorAll('.section')
    let links = [...elements].map(section => (
      {title: section.id, href: '#' + section.id}
    ))
    setSections({
      links: links,
      elements: elements
    })
  }, [])

  return (
    <div className='App'>
      <Header links={sections.links} sections={sections.elements}/>
      <Home links={sections.links}/>
      <div className='section' id='Intro' style={{height:'1000px', backgroundColor:'white'}}>
        <div style={{height:'100%', width:'1%', backgroundColor:'#EFE7E7', marginInline:'auto'}}></div>
      </div>
      <div className='section' id='Portfolio' style={{height:'1000px', backgroundColor:'#EFE7E7'}}>
        <div style={{height:'100%', width:'1%', backgroundColor:'white', marginInline:'auto'}}></div>
      </div>
      <div className='section' id='Resume' style={{height:'1000px', backgroundColor:'white'}}>
        <div style={{height:'100%', width:'1%', backgroundColor:'#EFE7E7', marginInline:'auto'}}></div>
      </div>
      <div className='section' id='Contact' style={{height:'1000px', backgroundColor:'#EFE7E7'}}>
        <div style={{height:'100%', width:'1%', backgroundColor:'white', marginInline:'auto'}}></div>
      </div>
    </div>
  )
}
