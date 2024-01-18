import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setApiData: (state, action) => {
            // const singleData=action.payload.filter(user=>user.id)
            state.push(action.payload);
        },
    }
});

export const { setApiData } = usersSlice.actions;
export default usersSlice.reducer;
