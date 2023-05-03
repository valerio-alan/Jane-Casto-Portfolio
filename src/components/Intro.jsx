import janePFP from '../assets/jane.jpg'

export default function Intro(props) {
    return (
        <div className='section' id='Intro'>
            <div className='intro-content section-limiter'>
                <img className='intro-img' src={janePFP} />
                <div className='intro-text'>
                    <h3>Hi, I'm Jane!</h3>
                    <p>I handle policy analysis, data analytics, and data science, combining the important insights of data with real-world community needs.
                    <br/><br/>Come check out what I’ve been working on recently!</p>
                    <div className='intro-buttons'>
                        <h3 className='pointer unselectable' onClick={props.sections[2] && props.sections[2].offsetFunc}>See my projects</h3>
                        <a className='unselectable' href="/Resume.pdf" target='_blank'>
                            <h3 className='unselectable'>Resume</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}