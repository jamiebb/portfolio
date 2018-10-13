import React from 'react'

function Project(props) {
    return (
        <div className='Project'>
            <img src={props.project.image} className='ProjectImage' />
            <div className='ProjectDescription'>
                <h3> Description </h3>
                <p> {props.project.description} </p>
            </div>
            <div className='ProjectCode'>
                <h3> Code </h3>
                {props.project.code.map((code) => {
                    return <img className='ProjectCodeImage' alt={`${props.project.title}-${code}`} src={`./files/${code}.png`}/>
                })}
                <div className='ProjectCodeGitHub' href={`${props.project.github}`}>
                    <p> GitHub </p>
                    <img alt={`${props.project.title}-github`} src='./files/github.png' />
                </div>
            </div>
        </div>
    )
}

export default Project

