import React from "react";

function Skills() {

  return (
    <div className="profile-wrapper">
      <div className="profile-header" id="top">
        <h1>Virtual Resume</h1>

        <nav>
            <a href="#skills">Skills Section</a>
            <a href="#history">Work History Section</a>
            <a href="#education">Education History</a>
        </nav>
      </div>
      <div className="section-header" id="skills">
        <h2>Skills<a href="#top"><img src="https://images.craftsnherbs.com/top.jpg" /></a></h2>
      </div>
      <div className="profile-text">
        <div className="list">
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JS</li>
            <li>LESS</li>
          </ul>
          <ul>
            <li>React</li>
            <li>Cisco</li>
            <li>Networking</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
      <div className="section-header" id="history">
        <h2>Work History<a href="#top"><img src="https://images.craftsnherbs.com/top.jpg" /></a></h2>
      </div>
      <div className="profile-text">
        <div className="list">
          <ul>
            <li><b>2018 - Present: </b>Freelance Webdesigner</li>
            <li><b>2018 - Present: </b>Entrepreneur - HoneyBee's Crochet</li>
            <li><b>2015 - 2017: </b>Web.com - Universall Technition</li>
            <li><b>1998 - 2009: </b>US Navy - FireControlman (Weapons Specialist and Electronics)</li>
          </ul>
        </div>
      </div>
      <div className="section-header" id="education">
        <h2>Education<a href="#top"><img src="https://images.craftsnherbs.com/top.jpg" /></a></h2>
      </div>
      <div className="profile-text">
        <div className="list">
          <ul>
            <li><b>2020 - Present: </b>Lambda - Full Stack Web Developer</li>
            <li><b>2019 - Present: </b>NexGenT - Full Stack Network Engineer</li>
            <li><b>2010 - 2012: </b>Dutchess Community College - AS in Bussiness Administration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
