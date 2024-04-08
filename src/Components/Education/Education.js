import React from 'react'
import './Education.css'
import { educationData } from '../Data';

function Education() {
    return (
        <div className='education'>
            <h2 className="heading">Education</h2>
            <div className="timeline-items">
                {educationData.map((edu, id) => {
                    return (
                        <div className="timeline-item" key={id}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">{edu.date}</div>
                            <div className="timeline-content">
                                <h3>{edu.heading}</h3>
                                <p style={{fontSize:"16px",color:"#14ff6a"}}>{edu.place}</p>
                                <p style={{textAlign:"justify",fontSize:"14px",marginTop:"3px"}}>{edu.description}</p>
                            </div>
                        </div>
                    );
                })

                }
            </div>
        </div>
    )
}

export default Education
