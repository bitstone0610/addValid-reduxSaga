/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _, { get } from 'lodash';
import { CreativeCard } from '../../components';
import { Button, FilterBox } from '../../components/common';
import { Back } from '../../assets/icons';
import './styles.css';

class CreativeListBoard extends Component {
  state= {
    expanded: true,
  };

  toggleExpand = (expanded) => {
    this.setState({
      expanded,
    });
  }

  getSelectedCampaignID = () => {
    const currentUrl = window.location.href;
    const splitUrlArray = currentUrl.split('?');
    if (!splitUrlArray[1]) {
      return false;
    }
    const campaignID = splitUrlArray[1].split('=')[1];
    return campaignID;
  }

  getSelectedCampaign = () => {
    const { campaigns } = this.props;
    const selectedCampaignID = this.getSelectedCampaignID();
    if (!selectedCampaignID) {
      return [];
    }
    return _.find(campaigns, { id: this.getSelectedCampaignID() });
  }

  render() {
    const { expanded } = this.state;
    return (
      <div>
        <div className="fluid">
          <div className="board-header">
            <h1>{get(this.getSelectedCampaign(), 'campaignName', 'undefined')}</h1>
            <div className="buttons">
              <Link to="/">
                <Button>
                  <img src={Back} alt="back" />
                </Button>
              </Link>
              <Button>
                <span>UPLOAD ADS</span>
              </Button>
            </div>
          </div>
          <div className="ad-spec">
            <span>Using ad specification: </span>
            <span className="green">Display specification</span>
          </div>
          <div className="control-box">
            <FilterBox placeholder="FILTER CREATIVES" />
            <div>
              <span onClick={() => this.toggleExpand(false)}>Collapse</span>
              <span onClick={() => this.toggleExpand(true)}>Expand</span>
            </div>
          </div>
          <CreativeCard expanded={expanded} />
          <CreativeCard expanded={expanded} />
        </div>
      </div>
    );
  }
}

CreativeListBoard.propTypes = {
  campaigns: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default CreativeListBoard;
