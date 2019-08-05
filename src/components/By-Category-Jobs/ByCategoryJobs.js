import React, { useEffect, useState } from 'react'
import './ByCategoryJobs.scss';
import {JobsCategory} from '../../mockData/jobsCategory';
import JobsCategoryCard from '../Jobs-Category-Card/JobsCategoryCard';

export default function ByCategoryJobs() {
    
    const [jobCategory, setJobCategory] = useState([]);

    useEffect(() => {
        setJobCategory(JobsCategory);
    }, [])

    return (
        <div className="job-category-wrapper">
            <div className="title">
                <p>Jobs By Categories</p>
            </div>
            <div className="categories">
                {jobCategory.map((category) => <JobsCategoryCard key={category.id} category={category}/>)}
            </div>  
        </div>
    )
}
