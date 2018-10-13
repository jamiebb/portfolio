export const projects = (state=[], action) => {
    const loremIpsum = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus velit est, sit', 
        'amet cursus eros molestie non. Aliquam non mi et sem pharetra tincidunt. Sed tincidunt ',
    ]

    switch (action.type) {
        default:
            return [
                // {
                //     title: 'eStore',
                //     image: '../files/estore.jpg',
                //     content: loremIpsum
                // },
                // {
                //     title: 'Canvas Chrome Extension',
                //     image: '../files/chrome_extension.jpg',
                //     content: loremIpsum
                // },
                {
                    title: 'Career Consulting',
                    image: '../files/career_consulting.jpg',
                    link: '',
                    description: loremIpsum,
                    github: '',
                    code: ['html', 'css', 'javascript']
                }
                // {
                //     title: 'Code Blocks',
                //     image: '../files/code_blocks.jpg',
                //     content: loremIpsum
                // }
            ]
    }
}