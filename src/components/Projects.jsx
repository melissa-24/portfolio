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
        <h2>Current Projects<a href="#top"><img src="http://images.craftsnherbs.com/top.jpg" /></a></h2>
      </div>
      <div className="profile-text">
        <h3>These Projects are current and ongoing.  Feel free to click on the pictures to visit the sites</h3>
        <div className="project-card">
          <h4>1st Collaberation Build - My job was UI</h4>
          <a href="https://water-my-plants-ui.netlify.app/" target="_blank"><img src="http://images.craftsnherbs.com/portfolio/watermyplants.jpg" /></a>
        </div>
        <div className="project-card">
          <h4>2nd Collaberation Build - My job was UI</h4>
          <a href="https://re-mix.netlify.app/" target="_blank"><img src="http://images.craftsnherbs.com/portfolio/remix.jpg" /></a>
        </div>
        <div className="project-card">
          <h4>1st Professional Build - Updated Bi-Weekly</h4>
          <a href="http;//lah-photpgraphy.com" target="_blank"><img src="http://images.craftsnherbs.com/portfolio/lah.jpg" /></a>
        </div>
        <div className="project-card">
          <h4>Personal Crocheting Website</h4>
          <a href="http://honeybeescrochet.com" target="_blank"><img src="http://images.craftsnherbs.com/portfolio/crochet01.jpg" /></a>
        </div>
        <div className="project-card">
          <h4>A Web Developers Guide Site - Still adding Contributors and content</h4>
          <a href="https://react-help-guide.netlify.app/" target="_blank"><img src="http://images.craftsnherbs.com/portfolio/guide.jpg" /></a>
        </div>
      </div>
      <div className="section-header" id="past">
          <h2>Past Projects<a href="#top"><img src="http://images.craftsnherbs.com/top.jpg" /></a></h2>
      </div>
      <div className="profile-text">
        <h3>Many of the projects here are no longer active, they are simply a picture of what they were</h3>
        <div className="project-card">
          <h4>1st HTML Project Ever</h4>
          <img src="http://images.craftsnherbs.com/portfolio/irishgardens01.png" />
        </div>
        <div className="project-card">
          <h4>Same site a few years later</h4>
          <img src="http://images.craftsnherbs.com/portfolio/irishgardens02.png" />
        </div>
        <div className="project-card">
          <h4>5 years later same site</h4>
          <img src="http://images.craftsnherbs.com/portfolio/irishgardens03.png" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
