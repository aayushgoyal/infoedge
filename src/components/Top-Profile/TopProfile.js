import React, { Component } from "react";
import "./TopProfile.scss";
import Searchbox from "../Searchbox/Searchbox";

export default class TopProfile extends Component {
  render() {
    return (
      <div className="topProfile-wrapper">
        <div className="topProfile">
          <div className="personal">
            <div className="name">Rishabh Singh</div>
            <div className="education">12th Pass | Fresher</div>
          </div>
          <div className="profile-image-wrapper">
              <img src="assets/images/profile.png" className="profile-img" alt="profile"></img>
          </div>
        </div>
        <div className="searchbox">
          <Searchbox />
        </div>
      </div>
    );
  }
}
