import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    // Add a Book
    addBook: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/api/books`,
          body: data,
        };
      },
    }),

    // Fetch all BOOKS
    getAllBook: builder.query({
      query: () => ({
        url: "/api/books",
        method: "GET",
      }),
    }),
    // Fetch a single product by ID
    getBookDetails: builder.query({
      query: (id: string) => ({
        url: `api/books/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useAddBookMutation,
  useGetAllBookQuery,
  useGetBookDetailsQuery,
} = baseApi;
