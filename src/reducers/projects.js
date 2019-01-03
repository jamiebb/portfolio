export const projects = (state=[], action) => {
    switch (action.type) {
        default:
            return [
                {
                    title: 'The Social',
                    image: './files/the_social.jpg',
                    link: 'https://the-social-app.herokuapp.com/',
                    description: `This is a mockup of a social networking site. I looked at features on Facebook and LinkedIn and integrated 
                    some of them, such as posting, commenting, liking, adding friends, visiting other profiles, and other elements. With the 
                    base site now completed, I am planning on integrating more ideas in the future.`,
                    github: 'https://github.com/jamiebb/the-social-app',
                    code: ['React', 'Redux', 'Node', 'MongoDB', 'HTML', 'CSS', 'JavaScript', 'Illustrator', 'Photoshop']
                },
                {
                    title: 'eStore',
                    image: './files/estore.jpg',
                    link: 'https://jamiebb.github.io/ecommerce/',
                    description: `This is a mockup of an eCommerce site. I browsed features 
                    on Amazon and integrated them into this site. These include viewing recent 
                    orders, creating wish lists, filtering based on price and rating, a buy it 
                    again option, and other elements.`,
                    github: 'https://github.com/jamiebb/ecommerce',
                    code: ['React', 'Redux', 'HTML', 'CSS', 'JavaScript', 'Photoshop']
                },
                {
                    title: 'Double Team',
                    image: './files/double_team.jpg',
                    link: 'https://jamiebb.github.io/double_team/',
                    description: `This is a game where you choose five movies and try to get a higher score with Do Your Best or 
                    a lower score with Do Your Worst versus another team of five. The rankings are pulled from The Movie DB via API. 
                    The idea was a combination of my interest in movies and making a game out of it, using a layout similar to a 
                    video game I play.`,
                    github: 'https://github.com/jamiebb/double_team',
                    code: ['Vue', 'HTML', 'CSS', 'JavaScript']
                },
                {
                    title: 'Canvas Chrome Extension',
                    image: './files/chrome_extension.png',
                    link: 'https://vimeo.com/jamieburton/canvas',
                    description: `This is a Chrome Extension for a learning management system, 
                    Canvas, which is used to create online courses. I developed it while 
                    working at the Kellogg School of Management to help the course support 
                    team save time when using Canvas on various tasks.`,
                    github: 'https://github.com/jamiebb/canvas_extension',
                    code: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Extensions']
                },
                {
                    title: 'Career Consulting',
                    image: './files/career_consulting.jpg',
                    link: 'https://career-consulting.herokuapp.com/',
                    description: `This is a website that I designed and developed for a career 
                    consultant. I collaborated with her and another designer on what would look  
                    best to prospective clients.`,
                    github: 'https://github.com/jamiebb/career-consulting-node',
                    code: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Node', 'Illustrator']
                },
                {
                    title: 'Code Blocks',
                    image: './files/code_blocks.jpg',
                    link: 'https://jamiebb.github.io/codeblocks/',
                    description: `This is a game that I designed to help new coders learn 
                    about front end development with HTML, CSS, and JavaScript. It can be played 
                    alone or against one other person. At the end of the game, links are provided 
                    for correct, and incorrect answers, to make it easier to review. `,
                    github: 'https://github.com/jamiebb/codeblocks',
                    code: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Illustrator']
                }
            ]
    }
}