import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../store/feature/characterSlice";

export const store = configureStore({
  reducer: {
    characters: rootReducer,
  },
});

export default store;
