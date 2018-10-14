export const projects = (state=[], action) => {
    switch (action.type) {
        default:
            return [
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
                    link: 'https://github.com/jamiebb/career-consulting-node',
                    description: `This is a website that I designed and developed for a career 
                    consultant. I collaborated with her and another designer on what would look  
                    best to prospective clients.`,
                    github: 'https://github.com/jamiebb/career-consulting-node',
                    code: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Node', 'Illustrator']
                },
                {
                    title: 'Code Blocks',
                    image: './files/code_blocks.jpg',
                    link: 'https://github.com/jamiebb/codeblocks',
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