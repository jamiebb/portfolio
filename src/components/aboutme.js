import React from 'react'

function AboutMe(props) {
    return (
        <div id='AboutMe' className='AboutMe'>
            <h2> About Me </h2>
            <div className='AboutMeContent'>
                <img alt='Jamie' src='./files/jamie.jpg'/>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu malesuada dui, vel laoreet lorem. 
                    Aenean vestibulum, lacus quis finibus molestie, elit nisl commodo odio, nec pretium sapien ligula et 
                    ante.
                </p>
            </div>
        </div>
    )
}

export default AboutMe