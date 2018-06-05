import React, { Component, Fragment } from 'react'


import "./TopSection.css";

const TopSection = props => (
  <header className="TopSection">
  <h5>Score: {props.score}  |  Top Score: {props.topscore}</h5>
  
    
  </header>
);

export default TopSection;

