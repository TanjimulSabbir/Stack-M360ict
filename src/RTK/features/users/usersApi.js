import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (page) => ({
                url: `/users?per_page=5&page=5`
            }),
        }),
        specifiedUser: builder.query({
            query: (id) => ({
                url: `/users?email=${id}`
            })
        }),
        editUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body: data
            })
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELELE",
            })
        })
    })
})

export const {
    useGetUsersQuery,
    useSpecifiedUserQuery,
    useEditUserMutation,
    useDeleteUserMutation
} = usersApi;