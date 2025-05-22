
import React from "react";

const InterestForm = ({ setInterest }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const interest = e.target.elements.interest.value;
    setInterest(interest);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h1>Select Your Interest</h1>
      <select name="interest" required>
        <option value="">-- Select Interest --</option>
        <option value="technology">Technology</option>
        <option value="art">Art</option>
        <option value="science">Science</option>
        <option value="business">Business</option>
        <option value="healthcare">Healthcare</option>
        <option value="education">Education</option>
        <option value="sports">Sports</option>
        <option value="law">Law</option>
      </select>
      <button type="submit">Show Careers</button>
    </form>
  );
};

export default InterestForm;