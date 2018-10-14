import React, { Component } from 'react'
import { connect } from 'react-redux'

class Skills extends Component {
    render() {
        return (
            <div id='Skills' className='Skills'>
                <h2> Skills </h2>
                {this.props.skills.map((skill, index) => {
                    return (
                        <div className='SkillsContent' key={`skill-${skill}`}>
                            <img title={`${skill}`} alt={`${skill}-icon`} src={`./files/${skill}.png`} /> 
                            <p> {skill} </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        skills: state.skills
    }
}

export default connect(mapStateToProps, null)(Skills)