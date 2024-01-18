import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
    tagtypes: ["deleted"],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (page) => ({
                url: `/users?per_page=5&page=${page}`
            }),
            // providesTags: ["deleted"]
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
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    // await queryFulfilled;
                    dispatch(usersApi.util.updateQueryData("getUsers", undefined, (draft) => {
                        return draft?.filter(user => user?.id !== args)
                    }))
                } catch (error) {
                    dispatch(usersApi.util.updateQueryData("getUsers", undefined, (draft) => {
                        console.log(JSON.stringify(draft))
                        return draft?.filter(user => user?.id !== args)
                    }))
                    console.log(error)
                }
            }
        }),
    })
})

export const { useGetUsersQuery, useSpecifiedUserQuery, useEditUserMutation, useDeleteUserMutation } = usersApi;