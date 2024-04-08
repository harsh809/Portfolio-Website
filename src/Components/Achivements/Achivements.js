import React from 'react'
import './Achivements.css'
import { AchivementsData } from '../Data'

function Achivements() {
    return (
        <div className='achivements'>
            <h2 className="heading">Achievements</h2>
            <div className="achievements-container">
                {AchivementsData.map((data, id) => {
                    return (
                        <div className="achievements-box" key={id}>
                            {/* <i className="fa-solid fa-server"></i> */}
                            <h3>{data.heading}</h3>
                            <p>{data.description}</p>
                            {/* <a href={data.link} className="btn">Learn More</a> */}
                        </div>
                    )
                })};
            </div>
        </div>
    )
}
export default Achivements
