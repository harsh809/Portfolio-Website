import React from 'react'
import './About.css'
function About() {
    return (
        <div className='about'>
            <h2 className="heading">About</h2>
            <div className='about-container'>
                <div className='about-img'>
                    <img src="image/aboutpage.jpg" alt="" />
                </div>
                <div className='about-para'>
                    <p>I am a Software Engineering undergrad student at Delhi Technological University.A passionate full-stack web developer.Proficient in full-stack development,I have expertise in MERN (MongoDB, Express.js, React.js, Node.js) stack.I accomplish these full stack projects by developing robust and scalabe RESTful APIs. Academically, I achieved a good rating(1722) in LeetCode and solved over 500+ DSA problems.I am proficient in Data structures and Web Devlopment.Embarking in an impactful internship with USIP, DTU Delhi, I played a key role in the "LAB ON WHEELS" initiative, serving as a teaching assistant to impart computer awareness to school students, my leadership extends as Cohead of Public Relations at Engifest DTU, showcasing a dynamic blend of technical proficiency and organizational skills.I have also cleared the internal round of the Smart India Hackathon (SIH) hackathon.</p>
                </div>
            </div>
        </div>
    )
}

export default About
