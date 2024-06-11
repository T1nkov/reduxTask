import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "showText",
  initialState: false,
  reducers: {
    show: () => true,
    hide: () => false,
  },
});

// export const { increment } = slice.actions;
// export default slice.reducer;
const { show, hide } = slice.actions;
const reducer = slice.reducer;

export { show, hide };
export default reducer;
