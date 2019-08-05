import React, {useEffect, useState} from 'react'
import JobsCard from "../Jobs-Card/JobsCard";
import { JobsList } from "../../mockData/nearbyJobs";
import './ByPreferenceJobs.scss';
import Pill from '../Pill/Pill';
import { NeayByFilters } from '../../mockData/nearbyFilter';


export default function ByPreferenceJobs() {
    const [jobsListing, setJobListing] = useState([]);
    const [nearbyJobsFilters, setNearbyJobsFilters] = useState([]);

    useEffect(() => {
      setJobListing(JobsList);
      setNearbyJobsFilters(NeayByFilters);
    }, []);
  
    return (
      <div className="jobsListing-wrapper">
        <div className="header">
          <div className="icon">
            <img src="assets/images/icons/Jobs_For_You.svg"></img>
          </div>
          <div className="header-section">
            <p className="title">Jobs For You</p>
            <p className="subtitle">Based Oon your <span>PREFERENCES</span></p>
          </div>
          <div className="view">
            VIEW
          </div>
        </div>
        <div className="filters">
         {nearbyJobsFilters.map((filter, index) => <Pill key={index} data={filter}/>)}
        </div>
        <div className="joblisting">
          {jobsListing.map(job => (
            <JobsCard jobData={job} key={job.id} />
          ))}
        </div>
      </div>
    );
}
