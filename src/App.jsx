
import React, { useState } from "react";
import InterestForm from "./components/InterestForm.jsx";
import CareerList from "./components/CarrerList.jsx";
import CareerDetail from "./components/CarrerDetail.jsx";
import careersData from "./data/carrers.js";
import "./style.css"

const App = () => {
  const [interest, setInterest] = useState("");
  const [selectedCareer, setSelectedCareer] = useState(null);

  const careers = interest ? careersData[interest] || [] : [];

  if (!interest) return <InterestForm setInterest={setInterest} />;
  if (selectedCareer) return <CareerDetail career={selectedCareer} onBack={() => setSelectedCareer(null)} />;

  return <CareerList careers={careers} onSelectCareer={setSelectedCareer} onBack={() => setSelectedCareer(null)} />;
};

export default App;

