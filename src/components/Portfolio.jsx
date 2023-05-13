import projects from '../data/projects'

export default function Portfolio(props) {
	// const projectWidth = 5

	const projectEls = projects.data.map((project, i) => (
		<a className='project-wrapper' href={project.link} target='_blank' rel='noopener' key={i}>
			<div
				className='project popped'
				style={{
					backgroundImage: `url('${project.img}')`,
				}}
			>
				<div className='project-content'>
					<div className='project-text'>
						<h3 className='project-title'>{project.title}</h3>
						<p className='project-description'>{project.description}</p>
					</div>
					<div className='project-tags'>
						{project.tags.map((tag, i) => (
							<h4 key={i} className='project-tag unselectable' style={{ backgroundColor: projects.tags[tag].color, color: '#fffffff0' }}>
								{tag}
							</h4>
						))}
					</div>
				</div>
			</div>
		</a>
	))

	return (
		<div className='section' id='Projects'>
			<div className='section-content section-limiter'>
				<h2 className='section-title popped'>Projects</h2>
				<div className='portfolio-grid'>{projectEls}</div>
			</div>
		</div>
	)
}
