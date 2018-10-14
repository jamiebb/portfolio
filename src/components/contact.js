import React from 'react'

function Contact(props) {
    return (
        <div id='Contact' className='Contact'>
            <h2> Contact </h2>
            <p> 
                Feel free to contact me via email or LinkedIn for more project samples or 
                information. 
            </p>
            <div className='ContactEmail'>
                <h3> Email </h3>
                <p> <a href='mailto:hello@jamiebb.com' target='_top' title='Email hello@jamiebb.com'> hello@jamiebb.com </a> </p>
            </div>
            <div className='ContactSocial'>
                <h3> Online At </h3>
                <a href='https://vimeo.com/jamieburton' target='_blank' rel="noopener noreferrer"> <img title='Vimeo Link' alt='Vimeo icon' src='./files/vimeo.png' /> </a>
                <a href='https://github.com/jamiebb' target='_blank' rel="noopener noreferrer"> <img title='GitHub Link' alt='GitHub icon' src='./files/github.png' /> </a>
                <a href='https://www.linkedin.com/in/burtonjamie/' target='_blank' rel="noopener noreferrer">  <img title='LinkedIn Link' alt='LinkedIn icon' src='./files/linkedin.png' /> </a>
            </div>
        </div>
    )
}

export default Contact