import uuid from 'uuid';
import {
  CAMPAIGN_LIST_SUCCESS,
  CAMPAIGN_NAME_CHANGED,
  CREATE_NEW_CAMPAIGN,
} from '../constants/campaign';

const initialState = {
  campaignList: [],
  campaignTemp: {
    campaignName: '',
    userName: 'Jesper',
    date: '21 Apr 2017',
  },
};

export default function campaignsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CAMPAIGN_NAME_CHANGED:
      return {
        ...state,
        campaignTemp: {
          ...state.campaignTemp,
          id: uuid.v4(),
          campaignName: payload,
        },
      };
    case CREATE_NEW_CAMPAIGN:
      return {
        ...state,
        campaignList: [
          ...state.campaignList,
          payload,
        ],
      };
    case CAMPAIGN_LIST_SUCCESS:
      return {
        ...state,
        campaignList: payload,
      };
    default:
      return state;
  }
}
