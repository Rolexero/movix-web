import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  token: string;
  full_name: string;
}

const initialState: User = {
  token: "",
  full_name: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addAuthUser: (state, action: PayloadAction<User>) => {
      state.full_name = action.payload.full_name;
      state.token = action.payload.token;
    },
  },
});
export default UserSlice.reducer;
export const { addAuthUser } = UserSlice.actions;
