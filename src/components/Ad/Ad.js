import React from "react";
import "./Ad.scss";

export default function Ad() {
  return (
    <div className="Ad">
      <div className="promotion-content">
        <div className="promotion-text">
          <p className="title">Get alerts on Whatsapp</p>
          <p className="subtitle">For Similar Jobs</p>
        </div>
        <div className="btn">
            <p>ENABLE NOW</p>
        </div>
      </div>
      <div className="promotion-medium" >
          <img src="assets/images/category-images/beautician.png" alt="promotion-medium"></img>
      </div>
    </div>
  );
}
