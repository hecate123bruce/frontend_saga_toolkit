import { all, takeLatest } from 'redux-saga/effects'

import { Appactions } from 'store';
import { createUserSaga, getUsersSaga } from './user.saga';

function* rootSaga() {
  yield all([
    takeLatest(Appactions.user.getUsers.type, getUsersSaga),
    takeLatest(Appactions.user.createUser.type, createUserSaga),
  ])
}

export default rootSaga;
 