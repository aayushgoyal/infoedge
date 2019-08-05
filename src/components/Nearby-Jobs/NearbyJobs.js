import React, { useEffect, useState } from "react";
import JobsCard from "../Jobs-Card/JobsCard";
import { JobsList } from "../../mockData/nearbyJobs";
import "./NearbyJobs.scss";

export default function NearbyJobs() {
  const [jobsListing, setJobListing] = useState([]);

  useEffect(() => {
    setJobListing(JobsList);
  }, []);

  return (
    <div className="jobsListing-wrapper">
      <div className="header">
        <div className="icon">
          <img src="assets/images/icons/Jobs_Near_You.svg"></img>
        </div>
        <div className="header-section">
          <p className="title">Jobs For You</p>
          <p className="subtitle">In and around <span>Sector 30, Gurugram</span></p>
        </div>
        <div className="view">
          VIEW
        </div>
      </div>
      <div className="joblisting">
        {jobsListing.map(job => (
          <JobsCard jobData={job} key={job.id} />
        ))}
      </div>
    </div>
  );
}
