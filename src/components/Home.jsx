import ParticleBack from './Particles'

export default function Home(props) {
    return (
        <div className='section unselectable' id='Home'>
            <ParticleBack />
            <div className='home-info popped pointer' onClick={props.sections[1] && props.sections[1].offsetFunc}>
                <h1 className='unselectable'>Jane Casto</h1>
                <h2 className='unselectable'>Policy & Data Analyst</h2>
            </div>
            <div className='pointer' onClick={props.sections[1] && props.sections[1].offsetFunc}>
                <div className='arrow-down popped'></div>
            </div>
        </div>
    )
}