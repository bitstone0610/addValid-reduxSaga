import React from 'react';
// import PropTypes from 'prop-types';
import './styles.css';


const SelectBox = () => (
  <div className="select-box">
    <select>
      <option value="all-campaigns">ALL CAMPAIGNS</option>
      <option value="others">OTHERS</option>
    </select>
  </div>
);


export default SelectBox;
