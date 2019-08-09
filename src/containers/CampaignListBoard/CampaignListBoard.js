/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { createStructuredSelector } from 'reselect';
import {
  campaignListRequest,
  campaignNameChanged,
  createNewCampaign,
} from '../../actions/campaigns';
import { selectAllCampaigns } from '../../selectors';
import { CampaignListBoardComponent } from '../../pages';

class CampaignListBoard extends Component {
  state={};

  componentWillMount() {
    const { campaignListRequest } = this.props;
    campaignListRequest();
  }

  render() {
    const campaignList = get(this.props, 'campaigns.campaignList', []);
    const campaignTemp = get(this.props, 'campaigns.campaignTemp', {});
    const {
      campaignNameChanged,
      createNewCampaign,
    } = this.props;

    return (
      <CampaignListBoardComponent
        campaigns={campaignList}
        campaignTemp={campaignTemp}
        campaignNameChanged={campaignNameChanged}
        createNewCampaign={createNewCampaign}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  campaigns: selectAllCampaigns,
});

const mapDispatchToProps = {
  campaignListRequest,
  campaignNameChanged,
  createNewCampaign,
};

CampaignListBoard.propTypes = {
  campaignListRequest: PropTypes.func.isRequired,
  campaignNameChanged: PropTypes.func,
  createNewCampaign: PropTypes.func,
};

CampaignListBoard.defaultProps = {
  campaignNameChanged: () => {},
  createNewCampaign: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignListBoard);
