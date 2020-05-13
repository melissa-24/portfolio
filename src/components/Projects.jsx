import React from "react";

function Projects() {

  return (
    <div className="profile-wrapper">
      <div className="profile-header" id="top">
        <h1>Projects</h1>
        <nav>
            <a href="#current">Current Projects</a>
            <a href="#past">Past Projects</a>
        </nav>
      </div>
      <div className="section-header" id="current">
        <h3>Current Projects<a href="#top"><img src="http://images.craftsnherbs.com/top.jpg" /></a></h3>
      </div>
      <div className="profile-text">
     
      </div>
      <div className="section-header" id="past">
          <h3>Past Projects<a href="#top"><img src="http://images.craftsnherbs.com/top.jpg" /></a></h3>
      </div>
      <div className="profile-text">

      </div>
    </div>
  );
}

export default Projects;
