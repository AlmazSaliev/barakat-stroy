import { createSlice } from "@reduxjs/toolkit";
import { RegistrationKey } from "../../constants";
import { GetItem, RemoveItem, SetItem } from "../../hooks/Localstorage";

const initialState = {
  user: GetItem({ key: RegistrationKey }) || {
    name: "",
    password: "",
    isAutentificated: false,
  },
};

const SignUp = createSlice({
  name: "signup",
  initialState,
  reducers: {
    Signup: (state, action) => {
      if (
        action.payload.name === "dyikan@gmail.com" &&
        action.payload.password === "123456"
      ) {
        state.user.isAutentificated = true;
        SetItem({
          key: RegistrationKey,
          body: {
            name: action.payload.name,
            password: action.payload.password,
            isAutentificated: true,
          },
        });
        return;
      }
      state.isAutentificated = false;
    },
    Logout: (state) => {
      RemoveItem({ key: RegistrationKey });
      state.user.isAutentificated = false;
      state.user.name = "";
      state.user.password = "";
    },
  },
});
export const SignupEnter = SignUp.actions;
export default SignUp;
