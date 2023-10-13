import { createSlice } from "@reduxjs/toolkit";
import { ITransaction } from "type";

interface StateType {
  transactions: ITransaction[],
  gettingTransaction: boolean,
  gotTransaction: boolean,
  creatingTransaction: boolean,
  createdTransaction: boolean,

  errors: string[]
}

const initialState: StateType = {
  transactions: [],
  gettingTransaction: false,
  gotTransaction: false,
  creatingTransaction: false,
  createdTransaction: false,

  errors: []
}

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: initialState,
  reducers: {
    getTransactions(state: StateType) {
      state.gettingTransaction = true;
      state.gotTransaction = false;
    },
    getTransactionSuccess(state, action) {
      state.gettingTransaction = false;
      state.gotTransaction = true;
      const { result } = action.payload;
      state.transactions = result;
    },
    getTransactionError(state, action) {
      state.gettingTransaction = false;
      state.gotTransaction = false;
      state.errors = [ ...state.errors, ...action.payload ];
    },
    createTransaction(state: StateType) {
      state.createdTransaction = false;
      state.creatingTransaction = true;
    },
    createTransactionSuccess(state, action) {
      state.createdTransaction = true;
      state.creatingTransaction = false;
      const { result } = action.payload;
      state.transactions = [ ...state.transactions, ...result ]
    },
    createTransactionError(state, action) {
      state.createdTransaction = false;
      state.creatingTransaction = false;
      state.errors = [ ...state.errors, action.payload ]
    },

    resetError(state) {
      state.errors = []
    }
  }
})

export const reducer = transactionSlice.reducer;
export const actions = transactionSlice.actions;
