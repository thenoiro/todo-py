import { configureStore } from '@reduxjs/toolkit';

import api from './api';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (defMiddleware) => {
    return defMiddleware().concat(api.middleware);
  },
});

export const {
  useTestQuery,
} = api

export default store;

