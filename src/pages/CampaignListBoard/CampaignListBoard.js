import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FilterBox,
  SelectBox,
  Modal,
} from '../../components/common';
import { CampaignListItem } from '../../components';
import './styles.css';


class CampaignListBoard extends Component {
  state= {
    showModal: false,
  }

  toggleModal = (toggleStatus) => {
    this.setState({
      showModal: toggleStatus,
    });
  }

  renderCampaigns = () => {
    const { campaigns } = this.props;
    if (campaigns.length > 0) {
      return campaigns.map(item => <CampaignListItem key={item.id} {...item} />);
    }
    return true;
  }

  render() {
    const { showModal } = this.state;
    const {
      campaignNameChanged,
      campaignTemp,
      createNewCampaign,
    } = this.props;
    return (
      <div>
        <div className="fluid">
          <div className="board-header">
            <h1>Campaigns</h1>
            <div>
              <Button onClick={() => this.toggleModal(true)}>
                <span>New Campaign</span>
              </Button>
            </div>
          </div>
          <div className="control-box">
            <FilterBox placeholder="FILTER CAMPAIGNS" />
            <SelectBox />
          </div>
          <div className="campaign-list">
            {this.renderCampaigns()}
          </div>
        </div>
        <Modal
          open={showModal}
          toggleModal={() => this.toggleModal()}
          campaignNameChanged={campaignNameChanged}
          campaignTemp={campaignTemp}
          createNewCampaign={createNewCampaign}
        />
      </div>
    );
  }
}

CampaignListBoard.propTypes = {
  campaigns: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  campaignNameChanged: PropTypes.func,
  createNewCampaign: PropTypes.func,
  campaignTemp: PropTypes.objectOf(PropTypes.string).isRequired,
};

CampaignListBoard.defaultProps = {
  campaignNameChanged: () => {},
  createNewCampaign: () => {},
};

export default CampaignListBoard;
