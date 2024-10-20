import { useState, useEffect } from 'react';

export default function Header(props) {
  const [currentSection, setCurrentSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');

      let pos_header = window.pageYOffset + header.offsetHeight;
      const sectionDistances = [...props.sections].map((section) => section.element.offsetTop + section.element.offsetHeight / 1.5 - pos_header);
      let min = Math.min(...sectionDistances.filter((num) => num > 0));

      props.sections.forEach((section, i) => {
        if (min === sectionDistances[i]) {
          setCurrentSection(section.element.id);
        }
      });
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props.sections]);

  useEffect(() => {
    const headerRight = document.querySelector('.header-right');
    const headerRightMobile = document.querySelector('.header-mobile-icon');

    const rightBoundingBox = headerRight.getBoundingClientRect();
    const rightMobileBoundingBox = headerRightMobile.getBoundingClientRect();

    if (currentSection === 'Home') {
      headerRight.style.setProperty('right', '50%');
      headerRightMobile.style.setProperty('right', '50%');
    } else {
      headerRight.style.setProperty('right', `${rightBoundingBox.width / 2}px`);
      headerRightMobile.style.setProperty('right', `${rightMobileBoundingBox.width / 2}px`);
    }
  }, [currentSection]);

  const linkEls = [...props.sections].map((section, i) => {
    return (
      <div className='header-link pointer' onClick={section.offsetFunc} key={i}>
        <h2 className={currentSection === section.title ? 'unselectable current-link' : 'unselectable'}>{section.title}</h2>
      </div>
    );
  });

  return (
    <div className='header-wrapper'>
      <header className='popped'>
        <a
          className='header-left'
          href='/'
          style={{
            opacity: currentSection === 'Home' ? '0' : '1',
            pointerEvents: currentSection === 'Home' ? 'none' : 'auto',
          }}
        >
          <h1 className='unselectable text-logo unbold'>Jane Casto</h1>
        </a>
        <div className='header-right'>{linkEls}</div>
        <div className='header-mobile-icon mobile pointer' onClick={!props.navOpen ? props.toggleNav : () => {}}>
          <div className='header-icon-line' style={{ transform: props.navOpen ? 'translateY(11.5px) rotate(45deg)' : '' }}></div>
          <div className='header-icon-line' style={{ width: props.navOpen ? '0' : '' }}></div>
          <div className='header-icon-line' style={{ transform: props.navOpen ? 'translateY(-11.5px) rotate(-45deg)' : '' }}></div>
        </div>
      </header>
      <div
        className='header-mobile-nav mobile'
        style={{
          transform: props.navOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: props.navOpen ? '0.8' : '0',
        }}
      >
        {linkEls}
      </div>
    </div>
  );
}
