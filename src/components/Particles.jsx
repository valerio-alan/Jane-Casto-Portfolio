import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

export default function ParticleBack() {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine)
	}, [])

	return (
		<Particles
			id='tsparticles'
			init={particlesInit}
			options={{
				fullScreen: {
					enable: false,
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: 'push',
						},
						onHover: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 100,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: '#5caae2',
					},
					links: {
						color: '#5caae2',
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
						// triangles:{
						//     enable: true,
						//     opacity:.05
						// }
					},
					// collisions: {
					//     enable: true,
					// },
					move: {
						direction: 'none',
						enable: true,
						outModes: {
							default: 'bounce',
						},
						random: false,
						speed: 2,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 80,
					},
					opacity: {
						value: 0.6,
					},
					shape: {
						type: 'circle',
					},
					size: {
						value: { min: 1, max: 5 },
					},
				},
				detectRetina: true,
			}}
		/>
	)
}
