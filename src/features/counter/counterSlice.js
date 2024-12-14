import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      state.count += 1;
    },
    decrementCount: (state, action) => {
      state.count -= 1;
    },
    resetCount: (state, action) => {
      return {
         ...state, 
        count : 0
      };
    },
  },
});

export default counterSlice.reducer;
export const { incrementCount, decrementCount, resetCount } =
counterSlice.actions;
