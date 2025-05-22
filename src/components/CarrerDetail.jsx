
import React from "react";

const CareerDetail = ({ career, onBack }) => {
  return (
    <div className="container">
      <button onClick={onBack} className="back-btn">← Back</button>
      <h2>{career.title}</h2>
      <p>{career.desc}</p>
      <p>Explore more about this career online!</p>
    </div>
  );
};

export default CareerDetail;