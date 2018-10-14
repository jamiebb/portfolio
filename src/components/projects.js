import React, { Component } from 'react'
import { connect } from 'react-redux'
import Project from './project'

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = { current: 'eStore'};
    }

    render() {

        
        return (
            <div id='Projects' className='Projects'>
                <h2> Projects </h2>
                {/* {this.props.projects.map((project) => {
                    return <img src={`${project.image}`} style={width: '50%'; float: 'left';}/>
                })} */}
                
                {this.props.projects.map((project, i) => {
                    project.last = false;

                    if (this.props.projects.length === i + 1) {
                        project.last = true;
                    }
                    
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