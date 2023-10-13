import createSagaMiddleware from "@redux-saga/core";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
  userActions,
  userReducer
} from './slices';
import rootSaga from "./sagas";

const reducer = combineReducers({
  user: userReducer
})

const sageMiddleware = createSagaMiddleware();

export const store = configureStore({
  preloadedState: {},
  reducer: reducer,
  middleware: (getDefaultMiddleware: any) => 
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(
      createSagaMiddleware
    )
})

sageMiddleware.run(rootSaga);

export const Appactions = {
  user: userActions
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
