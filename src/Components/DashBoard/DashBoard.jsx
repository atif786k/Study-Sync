import React from "react";
import Bot from './Chatbot';
import "./cse.css";

const DashBoard = () => {
  return (
    <>
      <div className="dash-side-container">
        <section className="upper-bar">
          <figure className="logo-logoImg">
            <img src="/icons8-book-96.png" alt="" width="30px" />
            <span>STUDY SYNC</span>
          </figure>
          <ul className="topics-scroll">
            <li>Java</li>
            <li>C++</li>
            <li>Python</li>
            <li>Data structures & algorithms</li>
            <li>Networking</li>
            <li>Microprocessor</li>
            <li>Compiler Design</li>
            <li>OOP's</li>
            <li>DBMS</li>
            <li>Mobile Computing</li>
            <li>SQL</li>
            <li>Cyber Security</li>
            <li>Data Warehousing</li>
            <li>Data Mining</li>
          </ul>
        </section>
        <div className="dash-main-div border-2 border-red-400">
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
      </div>
      <Bot/>
    </>
  );
};
export default DashBoard;
