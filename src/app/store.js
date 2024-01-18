import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../RTK/features/api/apiSlice";
import authSlice from "../RTK/features/auth/authSlice";
import paginationSlice from "../RTK/features/pagination/paginationSlice";
import usersSlice from "../RTK/features/users/usersSlice";



export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        pagination: paginationSlice,
        users: usersSlice,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
})