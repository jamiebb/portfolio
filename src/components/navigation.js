import React from 'react'

function Navigation(props) {
    return (
        <div className='Navigation'>
            <div className='navigationDividingLine'></div>
            <div className='NavigationLinks'>    
                <p className='navigationLeft'> <span> About Me </span> </p>
                <p> <span> Skills </span> </p>
                <p> <span> Projects </span> </p>
                <p> <span> Contact </span> </p>
                <p className='navigationRight'> <span> Resume </span> </p>
            </div>
            <div className='navigationDividingLine'></div>
        </div>
    )
}

export default Navigation