import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://monetiz-iq-odqj.vercel.app",
    credentials: "include",
  }),
  tagTypes: ["Channel", "Auth", "Video"],
  endpoints: (builder) => ({
    getChannel: builder.query({
      query: () => "api/channel/channelStats",
      providesTags: ["Channel"],
    }),

   getGeminiText: builder.query({
      query: (userId) => `/gemini/${userId}`,
      providesTags:["Gemini"]
    }),

    logout: builder.mutation({
      query: () => ({
        url: `oauth2callback/logout`,
        method: "GET",
      }),
      invalidatesTags: ["Channel", "Auth", "Gemini"], 
    }),
  }),
});

export const {
  useGetChannelQuery,
  useGetGeminiTextQuery,
  useLogoutMutation,
} = apiSlice;