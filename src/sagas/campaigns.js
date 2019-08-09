import { put, takeLatest } from 'redux-saga/effects';
import {
  campaignListSuccess,
  campaignNameChanged,
} from '../actions/campaigns';

import {
  CAMPAIGN_LIST_REQUEST, CREATE_NEW_CAMPAIGN,
} from '../constants/campaign';

import response from '../constants/fakeapi.json';

export function* campaignListRequestHandler() {
  const payload = response.data.campaigns;
  yield put(campaignListSuccess(payload));
}

export function* createNewCampaignHandler() {
  yield put(campaignNameChanged(''));
}


export default function* campaignSaga() {
  yield takeLatest(CAMPAIGN_LIST_REQUEST, campaignListRequestHandler);
  yield takeLatest(CREATE_NEW_CAMPAIGN, createNewCampaignHandler);
}
