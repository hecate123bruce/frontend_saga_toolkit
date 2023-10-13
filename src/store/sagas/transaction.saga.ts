import { call, put } from "redux-saga/effects"

import { Appactions } from "store";
import { mainApiInstance } from "utils"

interface ResponseGenerator {
  config: any,
  data: any,
  headers: any,
  request: any,
  status: number,
  statusText: string
}

export function* getTransactionsSaga(action: any) {
  try {
    const result: Partial<ResponseGenerator> = yield call(
      async () => await mainApiInstance.get('api/v1/transaction')
    );

    if (result) {
      yield put(Appactions.transaction.getTransactionSuccess(result.data));
    }
  } catch (error: any) {
    yield put(Appactions.transaction.getTransactionError(error.response.data.message))
  }
}

export function* createTransactionSaga(action: any) {
  try {
    const result: Partial<ResponseGenerator> = yield call(
      async () => await mainApiInstance.post('api/v1/transacion', action.payload)
    );

    if (result) {
      yield put(Appactions.transaction.createTransactionSuccess(result.data));
    }
  } catch(error: any) {
    yield put(Appactions.transaction.createTransactionError(error.response.data.message))
  }
}
 