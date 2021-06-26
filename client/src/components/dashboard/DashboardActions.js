import React from "react";
import { Link } from "react-router-dom";
import {BsStarFill} from "react-icons/bs";
import {MdLocalActivity} from "react-icons/md";
import {IoSchool} from "react-icons/io";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
        <Link to="/edit-profile" className="btn btn-light"
          ><BsStarFill /> Edit Profile
        </Link>
        <Link to="/add-experience" className="btn btn-light"
          ><MdLocalActivity /> Add Experience
        </Link>
        <Link to="/add-education" className="btn btn-light"
          ><IoSchool /> Add Education
        </Link>
      </div>
  )
}

export default DashboardActions;