import React from "react";
import "./css/insight.css";
import { MdArrowOutward } from "react-icons/md";

const Insight = () => {
    return (
        <>
        <section id="insight" className="insight-page">
            <div className="insight-page-content">
            <div className="left-div">
                <h2>Exclusive Insights Info</h2>
                <h2>about study sync</h2>
            </div>
            <div className="right-div">
                <p>
                Study Sync is a cutting-edge platform designed to revolutionize collaborative learning and synchronization among students and educators. With Study Sync, students can easily collaborate on assignments, share study materials, and engage in real-time discussions, regardless of their geographical locations. The platform's intuitive interface and user-friendly design make it accessible to learners of all levels, while its robust backend infrastructure ensures reliable performance and data security. Overall, Study Sync empowers both students and educators to maximize their learning potential and achieve academic success in today's digital age.
                </p>
            </div>
            </div>
            <div id="about" className="about-page">
                <h1>Want to know about the creators ?
                    <h6>follow the link to know about them</h6>
                </h1>
                <h1 className="h1-arrow"><MdArrowOutward className="arrow" /></h1>
            </div>
            <hr className="mt-16 border-1 border-[#111111] opacity-40"/>
        </section>
        </>
    );
}

export default Insight;