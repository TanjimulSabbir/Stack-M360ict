import { apiSlice } from "../Api/apiSlice";

const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        specifiedUser: builder.query({
            query: (email) => ({
                url: `/users?email=${email}`
            })
        }),
        addUser: builder.mutation({
            query: ({ data }) => ({
                url: "/users",
                method: "POST",
                body: data
            })
        }),
        editUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body: data
            })
        }),
    })
})

export const { useSpecifiedUserQuery, useAddUserMutation, useEditUserMutation } = usersApi;