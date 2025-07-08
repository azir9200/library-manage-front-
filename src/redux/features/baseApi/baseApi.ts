import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://librarymanagement-delta-three.vercel.app/api",

    credentials: "include",
  }),
  endpoints: () => ({}),
  tagTypes: ["books"],
});
//"http://localhost:5173/api",
