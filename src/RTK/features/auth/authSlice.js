import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    accessToken: undefined,
    user: undefined
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
        },
        userLogOut: (state) => {
            state.user = undefined;
            state.accessToken = undefined;
            localStorage.clear();
            toast.success("Logout Successful")
        }
    }
});

export const { userLoggedIn, userLogOut } = authSlice.actions;
export default authSlice.reducer;