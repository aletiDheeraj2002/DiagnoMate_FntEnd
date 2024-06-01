// InformationCards.js
import React from 'react';
import './index.css';

const InformationCards = ({ name, lifestyle_changes, recommended_foods, preventive_measures }) => (
  <div className="information-cards">
    <h2>{name}</h2>
    <div className="card">
      <h3>Lifestyle Changes</h3>
      <ul>
        {lifestyle_changes.map((change, index) => (
          <li key={index}>{change}</li>
        ))}
      </ul>
    </div>
    <div className="card">
      <h3>Recommended Foods</h3>
      <ul>
        {recommended_foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
    <div className="card">
      <h3>Preventive Measures</h3>
      <ul>
        {preventive_measures.map((measure, index) => (
          <li key={index}>{measure}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default InformationCards;
