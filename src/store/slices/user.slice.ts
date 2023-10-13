import { createSlice } from '@reduxjs/toolkit';
import { IUser } from "type";

type StateType = {
  users: IUser[],
  gettingUsers: boolean,
  gotUsers: boolean,

  errors: string[]
}

const initialState: StateType = {
  users: [],
  gettingUsers: false,
  gotUsers: false,

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
    }
  }
})

export const reducer = userSlice.reducer;
export const actions  = userSlice.actions;
