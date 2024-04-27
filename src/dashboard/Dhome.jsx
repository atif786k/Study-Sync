import React from "react";
import "./css/dhome.css";
import { Outlet, Link } from "react-router-dom";
import SideBar from "../Components/SideBar";

const Dhome = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <section id="dash" className="dash-page">
        <SideBar />
        <div className="dash-main-div">
          <div className="search-main-div">
            <h1>Which topic you want to study today ?</h1>
            <div className="search-field-div">
              <input
                type="text"
                placeholder="Search topic"
                className="topic-search"
              />
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dhome;
