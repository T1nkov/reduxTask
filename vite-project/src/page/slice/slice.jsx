import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
    refresh: () => {
      return 0;
    },
  },
});

// export const { increment } = slice.actions;
// export default slice.reducer;
const { increment, decrement,refresh     } = slice.actions;
const reducer = slice.reducer;

export { increment, decrement,refresh };
export default reducer;
