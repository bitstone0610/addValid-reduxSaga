/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import './styles.css';

const onCreateCampaign = (campaignTemp, createNewCampaign, toggleModal) => {
  if (get(campaignTemp, 'campaignName') === '') {
    alert('Campaign Name is required!');
  } else {
    createNewCampaign(campaignTemp);
    toggleModal(false);
  }
};

const onCampaignNameChange = (name, campaignNameChanged) => {
  campaignNameChanged(name);
};


const Modal = ({
  open,
  toggleModal,
  campaignNameChanged,
  createNewCampaign,
  campaignTemp,
}) => (
  <div id="modal" className={open ? 'modal-open' : 'modal-close'}>
    <div className="modal-header">
      <input
        className="close-btn"
        type="button"
        value="X"
        onClick={() => toggleModal(false)}
      />
    </div>
    <div className="modal-form">
      <h1>New campaign</h1>
      <div className="campaign-name-field">
        <input
          type="text"
          placeholder="Campaign Name"
          value={get(campaignTemp, 'campaignName')}
          onChange={e => onCampaignNameChange(e.target.value, campaignNameChanged)}
        />
      </div>
      <div className="campaign-option-field">
        <select>
          <option value={0}>Display specification</option>
        </select>
      </div>
      <div className="button-field">
        <input type="button" value="CREATE" onClick={() => onCreateCampaign(campaignTemp, createNewCampaign, toggleModal)} />
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  open: PropTypes.bool,
  toggleModal: PropTypes.func,
  campaignNameChanged: PropTypes.func,
  createNewCampaign: PropTypes.func,
  campaignTemp: PropTypes.objectOf(PropTypes.string).isRequired,
};

Modal.defaultProps = {
  open: false,
  toggleModal: () => {},
  campaignNameChanged: () => {},
  createNewCampaign: () => {},
};

export default Modal;
