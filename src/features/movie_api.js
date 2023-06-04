
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const movieApi = createApi({
  reducerpath: 'movieApi',
  baseQuery: fetchBaseQuery({ baserUrl: '' }),
  endpoints: (builder) => ({



    getMovieByCategory: builder.query({
      query: (query) => ({
        url: '/',
        metho: 'GET'
      })
    }),
    getSearchMovie: builder.query({
      query: (query) => ({
        url: '/',
        metho: 'GET'
      })
    }),

  })
});
export const { u } = movieApi;
