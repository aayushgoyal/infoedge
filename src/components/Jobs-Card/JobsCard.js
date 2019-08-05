import React from "react";
import "./JobsCard.scss";

export default function JobsCard(props) {
  return (
    <div className="JobCard">
      <div className="job-company-details-wrapper">
        <div className="job-company-details">
          <p className="job-position">{props.jobData.title}</p>
          <p className="company-name">{props.jobData.company}</p>
        </div>
        <div
          className="logo"
          style={props.jobData.company_logo ? {} : { display: "none" }}
        >
          <img src={props.jobData.company_logo} alt={props.jobData.company} />
        </div>
      </div>
      <div className="job-details">
        <div className="job-location">
          <img src="assets/images/icons/placeholder.svg" />
          <p className="data">{props.jobData.location}</p>
        </div>
        <div className="job-compensation">
          <img src="assets/images/icons/dollar.svg" />
          <p className="data">{props.jobData.compensation} per month</p>
        </div>
      </div>
      <div className="job-posting-day">
        <p>Posted 5 days ago</p>
      </div>
    </div>
  );
}

// {props.jobData.id}
