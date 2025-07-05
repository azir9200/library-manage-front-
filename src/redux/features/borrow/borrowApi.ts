import { baseApi } from "../baseApi/baseApi";

const borrowApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    creteOrder: builder.mutation({
      query: (data) => {
        return {
          url: `/borrow`,
          method: "POST",
          body: data,
        };
      },
    }),
    // Fetch all BOOKS
    getBorrowBook: builder.query({
      query: () => ({
        url: "/borrow",
        method: "GET",
      }),
    }),
  }),
});
export const { useCreteOrderMutation, useGetBorrowBookQuery } = borrowApi;
