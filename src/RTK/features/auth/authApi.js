import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: ({ data, accessToken }) => {
                console.log(data, "from usersApi");
                return {
                    url: "/users",
                    method: "POST",
                    body: data
                };
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const authData = {
                        accessToken: arg.accessToken,
                        user: result.data
                    }
                    localStorage.setItem("auth", JSON.stringify({ ...authData }))
                    dispatch(userLoggedIn({ ...authData }));
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
        }),
        login: builder.mutation({
            query: ({ data }) => {
                console.log(data, "from usersApi");
                return {
                    url: "/login",
                    method: "POST",
                    body: data,
                };
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const authData = {
                        accessToken: result.data.token,
                        user: arg
                    }
                    localStorage.setItem("auth", JSON.stringify({ ...authData }))
                    dispatch(userLoggedIn({ ...authData }))
                } catch (error) {
                    console.log(error.message)
                }
            }
        })
    })
})

export const { useRegisterMutation, useLoginMutation } = authApi;