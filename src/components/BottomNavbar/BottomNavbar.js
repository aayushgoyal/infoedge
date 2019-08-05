import React from "react";
import "./BottomNavbar.scss";

export default function BottomNavbar() {
  return (
    <div className="bottomNavbar">
      <div className="item active">
        <img
          className="navicon"
          src="assets/images/icons/Company_default.svg"
        />
        <p className="navtext">JOBS</p>
      </div>
      <div className="item">
        <img
          className="navicon"
          src="assets/images/icons/Company_default.svg"
        />
        <p className="navtext">APPLIES</p>
      </div>
      <div className="item">
        <img
          className="navicon"
          src="assets/images/icons/Company_default.svg"
        />
        <p className="navtext">PROFILE</p>
      </div>
    </div>
  );
}
