import { all, takeLatest } from 'redux-saga/effects'

import { AppActions } from 'store';

import { createUserSaga, getUsersSaga } from './user.saga';
import { createTransactionSaga, getTransactionsSaga } from './transaction.saga';

function* rootSaga() {
  yield all([
    takeLatest(AppActions.user.getUsers.type, getUsersSaga),
    takeLatest(AppActions.user.createUser.type, createUserSaga),
    takeLatest(AppActions.transaction.getTransactions.type, getTransactionsSaga),
    takeLatest(AppActions.transaction.createTransaction.type, createTransactionSaga)
  ])
}

export default rootSaga;
