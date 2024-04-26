import React, { useRef } from "react";
import NavBar from "../Components/NavBar";
import Insight from "./Insight";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import "./css/home.css";
import { MdArrowOutward } from "react-icons/md";

const Home = (props) => {
  const state = props.userState;
  const logOut = props.userLogOut;
  return (
    <>
      <section id="home" className="home-page">
        <NavBar navUpdate={state} />
        <div className="home-page-content">
          <h2 className="main-h2">
            Providing right resources for career and academic
            <h2 className="flex justify-center items-start">
              J
              <span>
                <svg class="c-bttn__morph" fill="none" viewBox="0 0 131 136">
                  <path
                    class="g-path"
                    data-morph="end"
                    fill="#fff"
                    d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"
                  ></path>
                  <path
                    class="g-path"
                    data-morph="start"
                    fill="#fff"
                    d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"
                    data-original="M65.72 109.14c10.08 0 17.76-3.78 23.04-11.34 5.4-7.68 8.1-17.64 8.1-29.88 0-12.24-2.7-22.2-8.1-29.88-5.28-7.68-12.96-11.52-23.04-11.52-9.96 0-17.7 3.84-23.22 11.52-5.4 7.68-8.1 17.64-8.1 29.88 0 12.12 2.7 22.02 8.1 29.7 5.52 7.68 13.26 11.52 23.22 11.52Zm46.08 7.02c-11.64 12.6-27.06 18.9-46.26 18.9s-34.62-6.3-46.26-18.9C7.76 103.56 2 87.48 2 67.92c0-19.56 5.76-35.64 17.28-48.24C30.92 7.08 46.34.78 65.54.78s34.62 6.3 46.26 18.9c11.64 12.6 17.46 28.68 17.46 48.24 0 19.56-5.82 35.64-17.46 48.24Z"
                  ></path>
                </svg>
              </span>
              urney
            </h2>
          </h2>
          <h2 className="secondary-h2">
            Simplifying the path to success for our juniors, one step at a time
            with Study Sync
          </h2>
          <div className="buttons space-x-4">
            <button className="btn">Developers Hub</button>
            <button className="btn bg-green">
              Get Started <MdArrowOutward className="ml-2 arrow" />
            </button>
          </div>
        </div>
      </section>
      <Insight />
      <Testimonials />
      <Contact logOutUser={logOut} />
    </>
  );
};

export default Home;
