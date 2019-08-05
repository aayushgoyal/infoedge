import React from 'react'
import './CityCard.scss';

export default function CityCard(props) {
    return (
        <div className="job-card">
            <div className="cityLogo">
                <img src={props.data.city.image}></img>
            </div>
            <div className="content">
                <p className="city-name">{props.data.city.name}</p>
                <p className="jobs-count">{props.data.jobs.availability} Jobs</p>
            </div>
        </div>
    )
}
