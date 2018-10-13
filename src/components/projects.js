import React, { Component } from 'react'
import { connect } from 'react-redux'
import Project from './project'

class Projects extends Component {
    render() {
        console.log(this.props.projects);
        return (
            <div className='Projects'>
                <h2> Projects </h2>
                {this.props.projects.map((project) => {
                    return <Project key={`project-${project.title}`} project={project} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps, null)(Projects)