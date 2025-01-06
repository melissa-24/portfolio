import React from "react";

function Home() {
    return (
        <div className="profile-wrapper">
            <div className="profile-header">
                <h1>
                    Melissa Longenberger
                </h1>
                <h2>
                    Full Stack Web Developer & Network Engineer
                </h2>
            </div>
            <div className="profile-text">  
                <p>I am a US Navy Veteran, Wife, and Mother.  I have been working with the front-end of websites since 2010, when I started a website so that my family across the country could see my family grow up.</p>
                <p>I started out by self teaching myself HTML and CSS and built very simple websites.  I have started building websites for others and am currently going through 2 schools.</p>
                <p>I am going to Lambda part time for Full Stack Web Development and NexGenT for Network Engineering</p> 
                <p>My ultimate goal is currently to open up a small business catering to small local businesses in my area.  Helping them get a website up and running or revamp one they have.  Getting their IT infrastructure up and running or working better.  I would also like to have classes open to the public to teach some basic computer skills.</p>
            </div>
        </div>
    );
}

export default Home;