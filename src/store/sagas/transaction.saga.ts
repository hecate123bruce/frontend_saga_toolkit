import { call, put } from "redux-saga/effects"

import { AppActions } from "store";
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
      console.log(result);
    if (result) {
      yield put(AppActions.transaction.getTransactionSuccess(result.data));
    }
  } catch (error: any) {
    yield put(AppActions.transaction.getTransactionError(error.response.data.message))
  }
}

export function* createTransactionSaga(action: any) {
  try {
    const result: Partial<ResponseGenerator> = yield call(
      async () => await mainApiInstance.post('api/v1/transaction', action.payload)
    );

    if (result) {
      yield put(AppActions.transaction.createTransactionSuccess(result.data));
    }
  } catch(error: any) {
    yield put(AppActions.transaction.createTransactionError(error.response.data.message))
  }
}
 