import React, { Component } from 'react'
import { connect } from 'react-redux'
import Project from './project'

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = { currentProject: 'eStore'};
    }

    render() {
        let currentProject = this.props.projects.filter((project, i) => {
            return project.title === this.state.currentProject;
        })

        return (
            <div id='Projects' className='Projects'>
                <h2> Projects </h2>
                <Project key={`project-${this.state.currentProject}`} project={currentProject[0]} />

                                <div className='ProjectsSmall'>
                    {this.props.projects.map((project) => {
                        if (project.title === this.state.currentProject) {
                            return (
                                <div className='ProjectSmall' key={`${project.title}-small-image`}>
                                    <img className='selected' src={`${project.image}`} alt={`${project.title}-small`} title={`${project.title}`} />
                                </div>
                            )
                        } else {
                            return (
                                <div className='ProjectSmall' key={`${project.title}-small-image`}>
                                    <img src={`${project.image}`} alt={`${project.title}-small`} title={`${project.title}`}
                                    onClick={() => {
                                        this.setState({ currentProject: project.title })
                                        document.querySelectorAll('.NavigationLinks a')[2].click();
                                    }} />
                                </div>
                            )
                        }
                    })}
                </div>
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