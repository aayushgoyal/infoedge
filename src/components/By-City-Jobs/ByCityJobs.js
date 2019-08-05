import React, { useEffect, useState } from "react";
import "./ByCityJobs.scss";
import { JobsByCity } from "../../mockData/jobsByCityList";
import CityCard from "../City-Card/CityCard";

export default function ByCityJobs() {
  const [jobsByCity, setJobsByCity] = useState([]);

  useEffect(() => {
    setJobsByCity(JobsByCity);
  }, []);

  return (
    <div className="city-job-wrapper">
      <div className="header">
        <div className="icon">
          <img src="assets/images/icons/Jobs_by_Location.svg" />
        </div>
        <div className="header-section">
          <p className="title">Jobs By Cities</p>
        </div>
        <div className="view">VIEW ALL</div>
      </div>
      <div className="joblisting">
        {jobsByCity.map(data => (
          <CityCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}
