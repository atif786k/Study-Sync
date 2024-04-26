import React from "react";
import "./css/testimoCard.css"

const TestimoCard = (props) => {
  return (
    <>
      <div id="testimonial-card" className="card">
        <h5>{props.id}</h5> 
        <p className="user-review">
          "{props.review}"
        </p>
        <h4 className="user user-name">{props.name}</h4>
        <h4 className="user user-occupation">{props.occupation}</h4>
      </div>
    </>
  );
};

export default TestimoCard;
