import React from 'react'

function Skills(props) {
    return (
        <div className='Skills'>
            <h2> Skills </h2>
            <div className='SkillsContent'>
                <img alt='html icon' src='./files/html.png' /> 
                <p> HTML </p>
            </div>
            <div className='SkillsContent'>
                <img alt='css icon' src='./files/css.png' /> 
                <p> CSS </p>
            </div>
            <div className='SkillsContent'>
                <img alt='javascript icon' src='./files/javascript.png' /> 
                <p> JavaScript </p>
            </div>
        </div>
    )
}

export default Skills