
import React from "react";

const CareerList = ({ careers, onSelectCareer, onBack }) => {
  return (
    <div className="container">
      <h2>Suggested Careers</h2>

      

      <ul>
        {careers.map((career) => (
          <li key={career.id} onClick={() => onSelectCareer(career)}>
            <h3>{career.title}</h3>
            <p>{career.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerList;