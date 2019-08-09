import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

const CampaignListItem = ({
  id,
  campaignName,
  userName,
  date,
}) => (
  <Link to={`/creatives?id=${id}`}>
    <div className="campaign-list-item">
      <div className="campaign-item-name">{campaignName}</div>
      <div className="campaign-item-details">
        <div>9</div>
        <div>{userName}</div>
        <div>{date}</div>
        <div>...</div>
      </div>
    </div>
  </Link>
);

CampaignListItem.propTypes = {
  campaignName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CampaignListItem;
