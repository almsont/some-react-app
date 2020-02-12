import React from 'react'
import './card.css'
export default function info() {
    return (
        <div className="card">
          <div className="card-content">
            <div className="profile-info">
              <div className="profile-pic-wrapper">
                <div className="profile-pic"/>
              </div>
              <h1>John Doe</h1>
              <h2>Junior Front-end developer</h2>
            </div>
          </div>
            
          <div className="profile-bio">
            <h1>Skills</h1>
            <div className="pills-wrapper">
              <div className="pill">HTML/CSS</div>
              <div className="pill">JavaScript</div>
              <div className="pill">React.js</div>
              <div className="pill">Node.js</div>
              <div className="pill">MongoDB</div>
            </div>
            <h1>Education</h1>
            <h2>Massachusetts Institute of Technology</h2>
            <h2>Computer Science</h2>
            <h2><strong>2016-2020</strong></h2>
          </div>
        </div>
    )
}

