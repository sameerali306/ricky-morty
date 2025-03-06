import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../store/feature/characterSlice";

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
});
export default store;
