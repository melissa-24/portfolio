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
        <h3>Skills<a href="#top"><img src="http://images.craftsnherbs.com/top.jpg" /></a></h3>
      </div>
      <div className="profile-text">
      </div>
      <div className="section-header" id="history">
        <h3>Work History<a href="#top"><img src="http://images.craftsnherbs.com/top.jpg" /></a></h3>
      </div>
      <div className="profile-text">
      </div>
      <div className="section-header" id="education">
        <h3>Enducation<a href="#top"><img src="http://images.craftsnherbs.com/top.jpg" /></a></h3>
      </div>
      <div className="profile-text">
      </div>
    </div>
  );
}

export default Skills;
