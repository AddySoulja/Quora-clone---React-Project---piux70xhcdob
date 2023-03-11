import { createSlice } from "@reduxjs/toolkit";

const initialState = { email: null, password: null };

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    logInUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logOutUser: (state) => {
      state.email = initialState.email;
      state.password = initialState.password;
    },
  },
});

export const { logInUser, logOutUser } = userAuthSlice.actions;
const reducer = userAuthSlice.reducer;
export default reducer;
