import { createSlice } from '@reduxjs/toolkit';
import { IUser } from "type";

type StateTyoe = {
  users: IUser[],
  gettingUsers: boolean,
  gotUsers: boolean,
  
  errors: string[]
}

const initialState: StateTyoe = {
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
    getUsers(state: StateTyoe) {

    }
  }
})

export const reducer = userSlice.reducer;
export const actions  = userSlice.actions;
