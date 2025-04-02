import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../Slice/formSlice.js";
import languageReducer from "../slice/languageSlice.js"

export const store = configureStore({
  reducer: {
    form: formReducer,
    language:languageReducer
  },
});