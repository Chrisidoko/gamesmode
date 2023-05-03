import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rawg.io/api",
  }),
  endpoints: (builder) => ({
    getAllproducts: builder.query({
      query: () => "games?key=4292472fd679469ea48703bd185d7750",
    }),
    getProductById: builder.query({
      query: (id) => `games/${id}?key=4292472fd679469ea48703bd185d7750`,
    }),
  }),
});

export const { useGetAllproductsQuery, useGetProductByIdQuery } = productsApi;
