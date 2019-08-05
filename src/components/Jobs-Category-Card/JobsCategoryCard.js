import React from 'react'
import './JobsCategoryCard.scss';

export default function JobsCategoryCard(props) {
    return (
        <div className="jobCategoryCard">
            <p className="category">{props.category.name}</p>
            <p className="jobs-count">{props.category.job.availability} Jobs</p>
        </div>
    )
}
