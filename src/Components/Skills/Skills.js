import React from 'react'
import './Skills.css'
import { skillData } from '../Data'
function Skills() {
    return (
        <div>
            <h2 className="heading">Skills</h2>
            <div className='skills-container'>
                {skillData.map((data, id) => {
                    return (
                        <div className='skills-box' key={id}>
                            <img className="skill-img" src={data.Image} alt="" />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Skills
