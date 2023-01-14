import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  token: string | null;
  displayName: string | null;
  email: string | null;
}

const initialState: User = {
  token: null,
  displayName: null,
  email: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addAuthUser: (state, action: PayloadAction<User>) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
  },
});
export default UserSlice.reducer;
export const { addAuthUser } = UserSlice.actions;
