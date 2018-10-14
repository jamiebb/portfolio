import React, { Component } from 'react';
import Header from './components/header'
import AboutMe from './components/aboutme'
import Skills from './components/skills'
import Navigation from './components/navigation'
import Projects from './components/projects'
import Contact from './components/contact'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='Content'>
          <Navigation />
          <AboutMe />
          <div className='mainDividingLine'></div>
          <Skills />
          <div className='mainDividingLine'></div>
          <Projects />
          <div className='mainDividingLine'></div>
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
