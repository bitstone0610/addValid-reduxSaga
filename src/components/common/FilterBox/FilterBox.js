import React from 'react';
import PropTypes from 'prop-types';
import { Magnifier } from '../../../assets/icons';

import './styles.css';

const FilterBox = ({ placeholder }) => (
  <div className="filter-box">
    <img src={Magnifier} alt="magnifier" />
    <input type="text" placeholder={placeholder} />
  </div>
);

FilterBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default FilterBox;
