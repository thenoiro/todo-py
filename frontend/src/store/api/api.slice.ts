import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { REACT_APP_API_URL: baseUrl } = process.env;

console.log(baseUrl);

type Types = {
  [key: string]: string;
};

type Test = {
  result: string;
};

const types: Types = {};
const tagTypes = Object.values(types);

const api = createApi({
  tagTypes,
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    test: build.query<Test, void>({
      query: () => ({
        method: 'GET',
        url: '/test'
      }),
    })
  }),
});

export default api;
