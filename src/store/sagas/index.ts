import { all, takeLatest } from 'redux-saga/effects'

import { Appactions } from 'store';
import { getUsersSaga } from './user.saga';

function* rootSaga() {
  yield all([
    takeLatest(Appactions.user.getUsers.type, getUsersSaga),
  ])
}

export default rootSaga;
