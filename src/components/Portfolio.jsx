export default function Portfolio() {
    const projects = [
        {
            title:'Project 1',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img:'https://cdn.discordapp.com/attachments/935354667758669854/1100300398805393519/image.png',
            link:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            tags:[]
        },
        {
            title:'Project 2',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img:'https://cdn.discordapp.com/attachments/935354667758669854/1100300398805393519/image.png',
            link:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            tags:[]
        },
        {
            title:'Project 3',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img:'https://cdn.discordapp.com/attachments/935354667758669854/1100300398805393519/image.png',
            link:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            tags:[]
        },
        {
            title:'Project 4',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img:'https://cdn.discordapp.com/attachments/935354667758669854/1100300398805393519/image.png',
            link:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            tags:[]
        },
        {
            title:'Project 5',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img:'https://cdn.discordapp.com/attachments/935354667758669854/1100300398805393519/image.png',
            link:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            tags:[]
        },
        {
            title:'Project 6',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img:'https://cdn.discordapp.com/attachments/935354667758669854/1100300398805393519/image.png',
            link:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            tags:[]
        },
        {
            title:'Project 7',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img:'https://cdn.discordapp.com/attachments/935354667758669854/1100300398805393519/image.png',
            link:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            tags:[]
        },
        {
            title:'Project 8',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img:'https://cdn.discordapp.com/attachments/935354667758669854/1100300398805393519/image.png',
            link:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            tags:[]
        },
    ]

    const projectEls = projects.map((project, i) => (
        <a className='portfolio-item popped' href={project.link} target="_blank" key={i} style={{
            backgroundImage: `url(${project.img})`
        }}>
            <div className='portfolio-item-content'>
                <h3 className='portfolio-item-title'>{project.title}</h3>
                <p className='portfolio-item-description'>{project.description}</p>
            </div>
        </a>
    ))

    return (
        <div className='section' id='Portfolio'>
            <div className='portfolio-content section-limiter'>
                <h2 className='portfolio-title popped'>Portfolio</h2>
                <div className='portfolio-grid'>
                    {projectEls}
                </div>
            </div>
        </div>
    )
}