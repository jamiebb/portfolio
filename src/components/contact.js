import React from 'react'

function Contact(props) {
    return (
        <div className='Contact'>
            <h2> Contact </h2>
            <p> 
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
                laoreet dolore magna aliquam 
            </p>
            <div className='ContactEmail'>
                <h3> Email </h3>
                <p> hello@jamiebb.com </p>
            </div>
            <div className='ContactSocial'>
                <h3> Social </h3>
                <p> GitHub </p>
                <img alt='github icon' src='./files/github.png' />
            </div>
        </div>
    )
}

export default Contact