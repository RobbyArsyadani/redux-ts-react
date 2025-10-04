import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  id: string;
  todos: string;
  category: string;
}

const initialState: InitialState[] = [
  {
    id: "aajshf1",
    todos: "mandi",
    category: "contoh",
  },
];

export const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<InitialState>) => {
      state.push(action.payload);
    },
    deleteTodos: (state, action: PayloadAction<string>) => {
      //   const { id } = action.payload;
      return state.filter((data) => data.id !== action.payload);
    },
    updateTodos: (state, action: PayloadAction<InitialState>) => {
      const index = state.findIndex((data) => data.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addTodos, deleteTodos, updateTodos } = addSlice.actions;

export default addSlice.reducer;

