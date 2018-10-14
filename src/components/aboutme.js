import React from 'react'

function AboutMe(props) {
    return (
        <div id='AboutMe' className='AboutMe'>
            <h2> About Me </h2>
            <div className='AboutMeContent'>
                <img alt='Jamie' src='./files/jamie.jpg'/>
                <p> 
                    After beginning my career in film and television, I decided that I wanted to be a front end developer and enrolled 
                    in a coding boot camp a few years ago. Ever since, I have used my creative background and coding skills to make 
                    dynamic, compelling websites.  
                </p>
            </div>
        </div>
    )
}

export default AboutMe