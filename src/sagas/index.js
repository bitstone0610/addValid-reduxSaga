import { all } from 'redux-saga/effects';
import campaignSaga from './campaigns';

export default function* rootSaga() {
  yield all([
    campaignSaga(),
  ]);
}
