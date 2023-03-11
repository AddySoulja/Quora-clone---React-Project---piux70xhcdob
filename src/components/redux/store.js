import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./slices/userAuth";

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
  },
});

export default store;
