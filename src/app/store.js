import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../RTK/features/api/apiSlice";
import authSlice from "../RTK/features/auth/authSlice";
import paginationSlice from "../RTK/features/pagination/paginationSlice";



export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        pagination: paginationSlice,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
})