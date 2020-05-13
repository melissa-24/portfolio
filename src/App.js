import React from 'react';
import './css/app.css';
import { Route, Link, Switch } from "react-router-dom";
import Home from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app">
      <div className="side-bar">
        <div className="nav-header">
          <img src="http://images.craftsnherbs.com/melissa.jpg" alt="Melissa" />
          <div className="nav-title">
          <h1>Melissa Longenberger</h1>
          <h2>Web Developer</h2>
          <h6>&</h6>
          <h2>Network Engineer</h2>
          </div>
        </div>
        <nav>
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
        </nav>
        <footer>
          <p>Last updated 5/2020</p>
          <p>(c) Copyright 2020</p>
        </footer>
      </div>
      <div className="main">
      <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Skills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
        <footer>
          <p>Last updated 5/2020</p>
        <p>(c) Copyright 2020</p>
      </footer>
      </div>
    </div>
  );
}

export default App;
