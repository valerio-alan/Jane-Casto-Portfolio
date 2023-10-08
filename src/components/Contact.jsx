export default function Contact() {
	return (
		<div className='section' id='Contact'>
			<div className='section-content section-limiter'>
				<h2 className='section-title popped'>Contact</h2>
				<p className='contact-text'>
					To follow my current work, follow me on{' '}
					<a className='linkedin-button' href='https://www.linkedin.com/in/janecasto/' target='_blank' rel='noopener'>
						LinkedIn
					</a>{' '}
					and{' '}
					<a className='tableau-button' href='https://public.tableau.com/app/profile/jane.casto' target='_blank' rel='noopener'>
						Tableau
					</a>
					.<br />
					<br />
					For hiring inquiries, contact me via my email,{' '}
					<a className='email-button' href='mailto:contact@janecasto.com'>
						contact@janecasto.com
					</a>
				</p>
				<div className='contact-buttons'>
					<a href='https://www.linkedin.com/in/janecasto/' target='_blank' rel='noopener'>
						LinkedIn
					</a>
					<a href='https://public.tableau.com/app/profile/jane.casto' target='_blank' rel='noopener'>
						Tableau
					</a>
					<a href='mailto:contact@janecasto.com'>Email</a>
				</div>
			</div>
		</div>
	)
}
