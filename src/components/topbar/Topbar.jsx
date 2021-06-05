import React from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <span className="logo">admin.panel</span>
        </div>
        <div className="top-right">
          <div className="topbar-icon-container">
            <NotificationsNone />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Language />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Settings />
          </div>
          <img
            src="https://media.planme.ro/public/images/provider/viggo-tailoring-costume-de-mire-cluj-napoca-portofolio-70941"
            alt="Profile .."
            className="top-avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
