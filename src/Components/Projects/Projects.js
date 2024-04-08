import React from 'react'
import './Projects.css'
import { ProjectData } from '../Data'
function Projects() {
    return (
        <div className='projects'>
            <h2 className="heading">Projects</h2>
            <div className="projects-container">
                {ProjectData.map((data, id) => {
                    return (
                        <div className="projects-box" key={id}>
                            <img src={data.image} alt="" />
                            <div className="projects-info">
                                <h4>{data.name}</h4>
                                <a href={data.sourecode} className="btn" target='blank'>Source Code</a>
                                <a href={data.codelink} className="btn" target='blank'>View</a>
                            </div>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}

export default Projects
