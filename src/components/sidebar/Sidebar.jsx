import React from "react";
import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  AttachMoneySharp,
  StorefrontSharp,
  MailOutlineSharp,
  FeedbackOutlined,
  MessageOutlined,
  AssessmentOutlined,
  WorkOutlineOutlined,
  ReportOutlined,
} from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <PersonOutline className="sidebar-icon" />
              Users
            </li>
            <li className="sidebar-list-item">
              <StorefrontSharp className="sidebar-icon" />
              Products
            </li>
            <li className="sidebar-list-item">
              <AttachMoneySharp className="sidebar-icon" />
              Transactions
            </li>
            <li className="sidebar-list-item">
              <AssessmentOutlined className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <MailOutlineSharp className="sidebar-icon" />
              Mail
            </li>
            <li className="sidebar-list-item">
              <FeedbackOutlined className="sidebar-icon" />
              Feedback
            </li>
            <li className="sidebar-list-item">
              <MessageOutlined className="sidebar-icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <WorkOutlineOutlined className="sidebar-icon" />
              Manage
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <ReportOutlined className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
