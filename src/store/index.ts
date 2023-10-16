import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import {
  transactionActions,
  transactionReducer,
  userActions,
  userReducer
} from './slices';
import rootSaga from "./sagas";

const reducer = combineReducers({
  user: userReducer,
  transaction: transactionReducer
})

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  preloadedState: {},
  reducer: reducer,
  middleware: (getDefaultMiddleware: any) => 
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(
      sagaMiddleware
    )
})

export const AppActions = {
  user: userActions,
  transaction: transactionActions
}

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
