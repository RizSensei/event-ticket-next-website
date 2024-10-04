/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "js-cookie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  profile?: any | null;
}

const initialState: AuthState = {
  token: Cookies.get("token") || null,
  profile: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      Cookies.set("token", state.token);
    },
    logout: (state) => {
      state.token = null;
      state.profile = null;
      Cookies.remove("token");
    },
    setProfile: (state, action: PayloadAction<any>) => {
      state.profile = action.payload;
    },
  },
});

export const { login, logout, setProfile } = authSlice.actions;

export default authSlice.reducer;
