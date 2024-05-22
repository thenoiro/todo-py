import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { REACT_APP_API_URL: baseUrl } = process.env;

type Types = {
  [key: string]: string;
};

type SignUpRequestData = {
  username: string;
  password: string;
};
type SignUpQueryArgs = {
  body: SignUpRequestData;
};

const types: Types = {};
const tagTypes = Object.values(types);

const api = createApi({
  tagTypes,
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    signUp: build.mutation<void, SignUpQueryArgs>({
      query: ({ body }) => ({
        method: 'POST',
        url: '/auth/sign-up',
        body,
      }),
    }),
  }),
});

export default api;
