import { configureStore } from "@reduxjs/toolkit";
import addSlice from "../features/addTodos/addSlice";

export const store = configureStore({
  reducer: {
    add: addSlice,
  },
});

