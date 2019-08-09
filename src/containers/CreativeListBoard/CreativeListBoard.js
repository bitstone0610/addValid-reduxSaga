import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { createStructuredSelector } from 'reselect';
import { selectAllCampaigns } from '../../selectors';

import { CreativeListBoardComponent } from '../../pages';


class CreativeListBoard extends Component {
  state = {};

  render() {
    const campaignList = get(this.props, 'campaigns.campaignList', []);
    return (
      <CreativeListBoardComponent campaigns={campaignList} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  campaigns: selectAllCampaigns,
});

export default connect(mapStateToProps)(CreativeListBoard);
