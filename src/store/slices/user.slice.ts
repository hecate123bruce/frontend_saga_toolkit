import { createSlice } from '@reduxjs/toolkit';
import { IUser } from "type";

type StateTyoe = {
  users: IUser[],

  errors: string[]
}

const initialState: StateTyoe = {
  users: [],

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
