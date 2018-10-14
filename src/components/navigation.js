import React, { Component } from 'react'

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        var navbar = document.querySelector('.Navigation');

        if (window.scrollY > 0) {
          navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
      }

    render() {
        return (
            <div className='Navigation'>
                <div className='NavigationLinks'>  
                    <a href='#AboutMe'> <span> About Me </span> </a>
                    <a href='#Skills'> <span> Skills </span> </a>
                    <a href='#Projects'> <span> Projects </span> </a>
                    <a href='#Contact'> <span> Contact </span> </a>
                    <a href='./files/resume.pdf' target='_blank' > <span> Resume </span> </a>
                </div>
            </div>
        )
    }
}

export default Navigation