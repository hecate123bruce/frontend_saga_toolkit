import { createSlice } from '@reduxjs/toolkit';
import { IUser } from "type";

type StateType = {
  users: IUser[],
  gettingUsers: boolean,
  gotUsers: boolean,
  createdUser: boolean,
  creatingUser: boolean,
  errors: string[]
}

const initialState: StateType = {
  users: [],
  gettingUsers: false,
  gotUsers: false,
  createdUser: false,
  creatingUser: false,
  errors: []
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    //get users
    getUsers(state: StateType) {
      state.gettingUsers = true;
      state.gotUsers = false;
    },
    getUsersSuccess(state, action) {
      state.gettingUsers = false;
      state.gotUsers = true;
      const { result } = action.payload;
      state.users = result;
    },
    getUserError(state, action) {
      state.gettingUsers = false;
      state.gotUsers = false;
      state.errors = action.payload
    },
    createUser(state: StateType) {
      state.createdUser = false;
      state.creatingUser = true;
    },
    createSuccess(state, action) {
      state.createdUser = true;
      state.creatingUser = false;
      const { result } = action.payload;
      state.users = [...state.users, result]
    },
    createError(state, action) {
      state.creatingUser = false;
      state.createdUser = false;
      state.errors = [ ...state.errors, ...action.payload ]
    },

    resetError(state) {
      state.errors = []
    }
  }
})

export const reducer = userSlice.reducer;
export const actions  = userSlice.actions;
