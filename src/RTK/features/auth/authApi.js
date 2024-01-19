import toast from "react-hot-toast";
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: ({ data, accessToken }) => {
                console.log(data, "from usersApi");
                // "/register" api showing problem, but "/users" api giving success response. 
                // for a successful response I'm using "/users" api
                return {
                    url: "/users",
                    method: "POST",
                    body: data
                };
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                console.log(arg, "register Slice")
                try {
                    const result = await queryFulfilled;
                    const authData = {
                        accessToken: arg.accessToken,
                        user: result.data
                    }
                    localStorage.setItem("auth", JSON.stringify({ ...authData }))
                    dispatch(userLoggedIn({ ...authData }));

                } catch (error) {
                    console.log(error.data.error)
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
                console.log(arg, "login Slice")
                try {
                    const result = await queryFulfilled;
                    console.log(result, "from login request")
                    if (result?.data?.token) {
                        const authData = {
                            accessToken: result.data.token,
                            user: arg.data
                        }
                        localStorage.setItem("auth", JSON.stringify({ ...authData }))
                        dispatch(userLoggedIn({ ...authData }))
                    }

                } catch (error) {
                   console.log(error,"from login error")
                }
            }
        })
    })
})

export const { useRegisterMutation, useLoginMutation } = authApi;