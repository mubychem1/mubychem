import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../Slice/formSlice.js";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});