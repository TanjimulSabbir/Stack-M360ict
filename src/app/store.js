import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../RTK/features/api/apiSlice";
import authSlice from "../RTK/features/auth/authSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
})