import {
  CAMPAIGN_LIST_REQUEST,
  CAMPAIGN_LIST_SUCCESS,
  CAMPAIGN_NAME_CHANGED,
  CREATE_NEW_CAMPAIGN,
} from '../constants/campaign';

export function campaignNameChanged(payload) {
  return {
    type: CAMPAIGN_NAME_CHANGED,
    payload,
  };
}

export function createNewCampaign(payload) {
  return {
    type: CREATE_NEW_CAMPAIGN,
    payload,
  };
}

export function campaignListRequest() {
  return {
    type: CAMPAIGN_LIST_REQUEST,
  };
}

export function campaignListSuccess(payload) {
  return {
    type: CAMPAIGN_LIST_SUCCESS,
    payload,
  };
}
