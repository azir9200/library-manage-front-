import { baseApi } from "../baseApi/baseApi";

const borrowApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    borrowBook: builder.mutation({
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
        url: "borrow/borrow-summary",
        method: "GET",
      }),
    }),
  }),
});
export const { useBorrowBookMutation, useGetBorrowBookQuery } = borrowApi;
