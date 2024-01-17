import { createSlice } from "@reduxjs/toolkit";

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
        }
    }
});

export const { userLoggedIn, userLogOut } = authSlice.actions;
export default authSlice.reducer;