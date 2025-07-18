import type { TBook } from "@/components/Types";
import { baseApi } from "../baseApi/baseApi";

const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Add a Book
    addBook: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `books/create-book`,
          body: data,
        };
      },
      invalidatesTags: ["books"],
    }),

    // Fetch all BOOKS
    getAllBook: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
      }),
      providesTags: ["books"],
    }),
    // Fetch a single book by ID
    getBookDetails: builder.query({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "GET",
      }),
    }),
    // edit book by ID
    editBook: builder.mutation({
      query: ({ id, data }: { id: string; data: TBook }) => ({
        url: `books/edit-book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    // Delete a by ID
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});
export const {
  useAddBookMutation,
  useGetAllBookQuery,
  useGetBookDetailsQuery,
  useEditBookMutation,
  useDeleteBookMutation,
} = bookApi;
