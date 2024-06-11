import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "validEmail",
  initialState: false,
  reducers: {
    checkEmail: (state, value) => {
      return /^[a-zA-Z0-9]+@[A-Za-z]+\.+[a-zA-Z]+$/gm.test(value.payload);
    },
  },
});

// export const { increment } = slice.actions;
// export default slice.reducer;
const { checkEmail } = slice.actions;
const reducer = slice.reducer;

export { checkEmail };
export default reducer;
