import { useState, useEffect } from 'react'

export default function Header(props) {
    const [currentSection, setCurrentSection] = useState('Home')

    useEffect(() => {
        const handleScroll = () => {
            let header = document.querySelector('header')
        
            let pos_header = window.pageYOffset + header.offsetHeight
            
            const sectionDistances = [...props.sections].map(section => (section.element.offsetTop + section.element.offsetHeight/1.5) - pos_header)
            
            let min = Math.min(...sectionDistances.filter(num => num > 0))

            props.sections.forEach((section, i) => {
                if (min === sectionDistances[i]) {
                    setCurrentSection(section.element.id)
                }
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [props.sections])

    const linkEls = [...props.sections].map((section, i) => {
        return (
            <div className='header-link pointer' onClick={section.offsetFunc} key={i}>
                <h2 className={currentSection === section.title ? 'unselectable current-link' : 'unselectable'}>{section.title}</h2>
            </div>
        )
    })

    return (
        <header className='popped'>
            <a className='header-left' href='/' style={{
                opacity: currentSection === 'Home' ? '0' : '1',
                pointerEvents: currentSection === 'Home' ? 'none' : 'auto'
            }}>
                <h1 className='unselectable text-logo'>Jane Casto</h1>
            </a>

            <div className='header-right' style={{
                right: currentSection === 'Home' ? '50%' : '0',
                transform: currentSection === 'Home' ? 'translateX(calc(50% + 20px))' : 'translateX(0)'
            }}>
                {linkEls}
            </div>
        </header>
    )
}