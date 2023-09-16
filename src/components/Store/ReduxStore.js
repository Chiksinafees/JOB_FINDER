import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authStore";
import jobReducer from "./jobStore";
import formReducer from "./formStore";

const store = configureStore({
  reducer: { auth: authReducer, job: jobReducer, form: formReducer },
});

export default store;
