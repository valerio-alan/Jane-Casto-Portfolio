import janePFP from '../assets/jane.jpg';

export default function Intro(props) {
  return (
    <div className='section' id='Intro'>
      <div className='intro-content section-limiter'>
        <img className='intro-img' src={janePFP} />
        <div className='intro-text'>
          <h3>
            Hi, I'm <span style={{ color: 'var(--accent-color)' }}>Jane Casto</span>.
          </h3>
          <p>
            I handle policy analysis, data analytics, and data science, combining the important insights of data with real-world community needs.
            <br />
            <br />
            Come check out what I've been working on recently!
          </p>
          <div className='intro-buttons'>
            <div className='pointer unselectable' onClick={props.sections[3] && props.sections[3].offsetFunc}>
              Projects
            </div>
            <a className='unselectable' href="/Jane Casto's Resume.pdf" target='_blank'>
              <div className='unselectable'>Resume</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
