import React from 'react'

function Project(props) {
    return (
        <div className='Project'>
            <a target='_blank' rel='noopener noreferrer' href={`${props.project.link}`} title={`Link to ${props.project.title}`}> 
                <img src={props.project.image.toLowerCase()} alt={`${props.project.title} website`} className='ProjectImage' /> 
            </a>
            <div className='ProjectDescription'>
                <h3> Description </h3>
                <p className='ProjectDescriptionLink'> <a href={props.project.link} rel='noopener noreferrer' target='_blank'> {props.project.title} </a> </p>
                <p className='ProjectDescriptionLink GitHubLink'> <a href={props.project.github} rel='noopener noreferrer' target='_blank'> GitHub </a> </p>
                <p> {props.project.description} </p>
            </div>
            <div className='ProjectCode'>
                <h3> Code </h3>
                {props.project.code.map((code) => {
                    return <img key={`${props.project.title}-${code}`} title={`${code}`} className='ProjectCodeImage' alt={`${props.project.title} ${code}`} src={`./files/${code.toLowerCase()}.png`}/>
                })}
                <a target='_blank' rel='noopener noreferrer' href={`${props.project.github}`}>
                    <img className='ProjectCodeImage GitHub' title='Link to GitHub' alt={`${props.project.title} github`} src='./files/github.png' />
                </a>
            </div>
        </div>
    )
}

export default Project

