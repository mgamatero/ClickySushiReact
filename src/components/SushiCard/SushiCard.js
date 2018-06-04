import React, {Component,Fragment} from 'react'


import "./SushiCard.css";

const SushiCard = props => (
  <div className="card">
    <div className="img-container">
      <img
        alt={props.name}
        src={props.image}
      />
    </div>
       
  </div>
);

export default SushiCard;

