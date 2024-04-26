import React from "react";
import "./css/contact.css";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdEmail, MdLocalPhone, MdArrowOutward } from "react-icons/md";

const Contact = (props) => {
const out= props.logOutUser;

  return (
    <>
      <section id="contact" className="contact-page">
        <div className="two-section-div">
          <div className="first-div">
            <div className="contact-heading">
              <h2>Let's</h2>
              <h2>chit chat</h2>
              <h6>We will reach out to you as soon as possible.</h6>
            </div>
            <div className="footer-buttons">
              <button className="footer-btn hover:animate-pulse">
                <MdEmail />
              </button>
              <button className="footer-btn hover:animate-pulse">
                <MdLocalPhone />
              </button>
              <button onClick={out} className="footer-btn hover:animate-pulse"><RiLogoutCircleRLine /></button>
            </div>
          </div>

          <div className="second-div">
            <ul className="social-div same-style">
              <h3>Social</h3>
              <li className="flex items-center">
                FaceBook
                <MdArrowOutward className="ml-1" />
              </li>
              <li className="flex items-center">
                Instagram
                <MdArrowOutward className="ml-1" />
              </li>
              <li className="flex items-center">
                Twitter
                <MdArrowOutward className="ml-1" />
              </li>
              <li className="flex items-center">
                Discord
                <MdArrowOutward className="ml-1" />
              </li>
            </ul>
            <ul className="resource-div same-style">
              <h3>Resources</h3>
              <li>Notes pdf</li>
              <li>Handwritten Notes</li>
              <li>Precise topics</li>
              <li>Accurate Links</li>
              <li> Correct Playlist</li>
            </ul>
          </div>
        </div>
        <hr className="my-3 opacity-40" />
        <div className="one-section-div flex justify-between items-center">
          <span> &copy; CopyRight2023 Study Sync</span>
          <span>All Right Reserved</span>
        </div>
      </section>
    </>
  );
};

export default Contact;
