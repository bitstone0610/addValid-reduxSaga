import React from 'react';
import './styles.css';

const CreativeCardHeader = () => (
  <div className="creative-card-header">
    <div>
      <img src="https://via.placeholder.com/50X40" alt="placeholder" />
      <div>
        <span>INC & FAST COMPANY - ROS BILLBOARD (970X250)</span>
        <span className="lightgray">HTML5 tag - 970X250 - Jesper</span>
      </div>
    </div>
    <div className="header-right">
      <span className="orangered">2 issues</span>
      <span>...</span>
    </div>
  </div>
);

export default CreativeCardHeader;
