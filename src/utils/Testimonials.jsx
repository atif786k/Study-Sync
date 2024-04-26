import React from "react";
import "./css/testimo.css";
import TestimoCard from "../Components/TestimoCard";

const Testimonials = (props) => {
  const users = [
    {
      id: "01",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias neque repudiandae saepe reiciendis quasi officiis laboriosam quaerat necessitatibus nesciunt corrupti rerum rationeinventore natus facere aliquam, adipisci soluta animi dolor",
      name: "Mohammad Farhan",
      occupation: "SDE at Mobile1x",
    },
    {
      id: "02",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias neque repudiandae saepe reiciendis quasi officiis laboriosam quaerat necessitatibus nesciunt corrupti rerum rationeinventore natus facere aliquam, adipisci soluta animi dolor",
      name: "Mohammad Atif",
      occupation: "CSE final year student",
    },
    {
      id: "03",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias neque repudiandae saepe reiciendis quasi officiis laboriosam quaerat necessitatibus nesciunt corrupti rerum rationeinventore natus facere aliquam, adipisci soluta animi dolor",
      name: "Mohammad Asif",
      occupation: "Coder & Developer",
    },
  ];

  return (
    <>
      <section id="testimonies" className="testimonies-page">
        <div className="page-heading">
          <h2>Testimonials & Reviews</h2>
        </div>
        <div>
          {users.map((e) => {
            return (
              <div className="card-container" key={e.id}>
                <TestimoCard
                  id={e.id}
                  review={e.review}
                  name={e.name}
                  occupation={e.occupation}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
