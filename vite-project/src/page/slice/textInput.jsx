import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "showInput",
  initialState: "",
  reducers: {
    addValueToInput: (state, value) => {
      return value.payload;
    },
  },
});

// export const { increment } = slice.actions;
// export default slice.reducer;
const { addValueToInput } = slice.actions;
const reducer = slice.reducer;

export { addValueToInput };
export default reducer;
