import type { TBook } from "@/components/Types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    // Add a Book
    addBook: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/books`,
          body: data,
        };
      },
    }),

    // Fetch all BOOKS
    getAllBook: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
      }),
    }),
    // Fetch a single product by ID
    getBookDetails: builder.query({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "GET",
      }),
    }),
    // edit book by ID
    editBook: builder.mutation({
      query: ({ id, data }: { id: string; data: TBook }) => ({
        url: `/books/edit/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    // Delete a by ID
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useAddBookMutation,
  useGetAllBookQuery,
  useGetBookDetailsQuery,
  useEditBookMutation,
  useDeleteBookMutation,
} = baseApi;
