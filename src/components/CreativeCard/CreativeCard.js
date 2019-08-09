import React from 'react';
import PropTypes from 'prop-types';
import CreativeCardHeader from './CreativeCardHeader';
import CreativeCardDetail from './CreativeCardDetail';

import './styles.css';

const CreativeCard = ({ expanded }) => (
  <div className="creative-card-container">
    <CreativeCardHeader />
    {expanded && <CreativeCardDetail />}
  </div>
);

CreativeCard.propTypes = {
  expanded: PropTypes.bool.isRequired,
};

export default CreativeCard;
