export default function Intro(props) {
    return (
        <div className='section' id='Intro'>
            <div className='intro-content section-limiter'>
                <img className='intro-img' src="https://placehold.co/512" />
                <div className='intro-text'>
                    <h3>Hi, I'm Jane!</h3>
                    <p>I handle policy analysis, data analytics, and data science, combining the important insights of data with real-world community needs.
                    <br/><br/>Come check out what I’ve been working on recently!</p>
                    <a className='intro-button' href={props.links[2] && props.links[2].href}>
                        <h3>See my projects</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}