import { all, takeLatest } from 'redux-saga/effects'

import { Appactions } from 'store';

import { createUserSaga, getUsersSaga } from './user.saga';
import { createTransactionSaga, getTransactionsSaga } from './transaction.saga';

function* rootSaga() {
  yield all([
    takeLatest(Appactions.user.getUsers.type, getUsersSaga),
    takeLatest(Appactions.user.createUser.type, createUserSaga),
    takeLatest(Appactions.transaction.getTransactions.type, getTransactionsSaga),
    takeLatest(Appactions.transaction.createTransaction.type, createTransactionSaga)
  ])
}

export default rootSaga;
