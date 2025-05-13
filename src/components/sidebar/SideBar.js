import React, { useState } from "react";
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import DashBoard from "../../pages/DashBoard";
import Pagesetting from "../../pages/Pagesetting";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { FaSquarePlus } from "react-icons/fa6";
import { Button, Collapse } from "react-bootstrap";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBoxes } from "react-icons/bs";
import {
  MdOutlineDashboard,
  MdOutlinePerson,
  MdOutlineStorefront,
  MdOutlineAddchart,
  MdOutlineAppRegistration,
  MdAssignmentAdd,
} from "react-icons/md";

import { BsBoxArrowRight } from "react-icons/bs";

const SideBar = ({ onLogout }) => {
  const [open, setOpen] = useState(null);
  const [isDeactive, SetDeactive] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };
  const toggle = () => {
    SetDeactive(!isDeactive ? "remove" : "");
  };
  return (
    <>
      <div
        className={` ${isDeactive ? "wrap-remove" : ""}`}
        id="sidebar-wrapper"
      >
        <div className="list-group regular">
          <ul>
            <li>
              <div className="user-logo mx-auto">
                <img
                  src={require("../sidebar/images/logo.jpeg")}
                  className="img-fluid logo"
                  alt=""
                />
              </div>
            </li>
            <li>
              <NavLink to="/console/dashboard" className="nav-link ">
                <span className="list-icon">
                  <MdOutlineDashboard />
                </span>
                <span class="list-text">Dashboard</span>
              </NavLink>
            </li>
             <li>
              <NavLink to="/console/Pagesetting" className="nav-link ">
                <span className="list-icon">
                  <MdOutlineDashboard />
                </span>
                <span class="list-text">Pagesetting</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="log-out py-2 text-start">
          <div className="list-group">
            <ul>
              <li>
                <Button onClick={handleLogout}>
                  <span className="list-icon">
                    <BsBoxArrowRight />
                  </span>
                  <span className="list-text">Logout</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* main-content start */}
      <div className="navbar navbar-expand  px-lg-4 header">
        <div className="d-lg-block d-none">
          <Button className="menu-toggle" onClick={toggle} id="menu-toggle">
            <span class="navbar-toggler-icon"></span>
          </Button>
        </div>
        <div className="d-block d-lg-none ms-auto">
          <Button className="menu-toggle" onClick={toggle} id="menu-toggle">
            <span class="navbar-toggler-icon"></span>
          </Button>
        </div>
        <div className="d-lg-block d-none ms-auto">
          <NavLink
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </NavLink>
        </div>
      </div>
      <div
        id="page-content-wrapper"
        className={`${isDeactive ? "page-remove" : ""}`}
      >
        <div className="content-bg">
          <div className="px-4 py-4">
            <div>
              <Routes>
                <Route
                  path="/console/dashboard"
                  element={<DashBoard />}
                ></Route>
                  <Route
                  path="/console/Pagesetting"
                  element={<Pagesetting />}
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
      {/* main-content-end */}
    </>
  );
};

export default SideBar;
