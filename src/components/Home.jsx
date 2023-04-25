import ParticleBack from './Particles'

export default function Header(props) {
    return (
        <div className='section' id='Home'>
            <ParticleBack />
            <a className='home-info popped' href={props.links[1] && props.links[1].href}>
                <h1 className='text-logo unselectable'>Jane Casto</h1>
                <h2 className='unselectable'>Policy & Data Analyst</h2>
            </a>
            <a href={props.links[1] && props.links[1].href}>
                <div className='arrow-down popped'></div>
            </a>
        </div>
    )
}