import { put, call } from "redux-saga/effects";
import { mainApiInstance } from "utils";

import { AppActions } from "store";

interface ResponseGenerator {
  config: any;
  data: any;
  headers: any;
  request: any;
  status: number;
  statusText: string
}

export function* getUsersSaga(action: any) {
  try {
    const result : Partial<ResponseGenerator> = yield call(
      async () => await mainApiInstance.get('api/v1/user')
    );

    if (result) {
      yield put(AppActions.user.getUsersSuccess(result.data));
    }
  } catch(error:any) {
    yield put(AppActions.user.getUserError(error.response.data.message));
  }
}

export function* createUserSaga(action: any) {
  try {
    const result : Partial<ResponseGenerator> = yield call(
      async () => await mainApiInstance.post('api/v1/user', action.payload)
    );

    if (result) {
      yield put(AppActions.user.createSuccess(result.data));
    }
  } catch (error: any) {
    yield put(AppActions.user.createError(error.response.data.message))
  }
}
