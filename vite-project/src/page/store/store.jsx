import { configureStore } from "@reduxjs/toolkit";
import counter from "../slice/slice";
import showInput from "../slice/textInput";
import showText from "../slice/showText";
import validEmail from "../slice/validationEmail";

const store = configureStore({
  reducer: {
    counter,
    showInput,
    showText,
    validEmail,
  },
});

export default store;
