import certs from '../data/certs';

export default function Education(props) {
  // const certWidth = 5

  const certEls = certs.map((cert, i) => (
    <a className={`cert-wrapper popped ${cert.date === 'In Progress' ? 'in-progress' : ''}`} href={cert.link} target='_blank' rel='noopener' key={i}>
      <img className='cert-img' src={cert.img} alt={`${cert.name} ${cert.type} from ${cert.institution}`} />
      <div className='cert-info'>
        <p className='cert-date'>{cert.date}</p>
        <h3 className='cert-title'>{cert.name}</h3>
        <p className='cert-tagline'>{cert.tagline}</p>
      </div>
    </a>
  ));

  return (
    <div className='section' id='Education'>
      <div className='section-content section-limiter'>
        <h2 className='section-title popped'>Education</h2>
        <div className='timeline'>{certEls}</div>
      </div>
    </div>
  );
}
