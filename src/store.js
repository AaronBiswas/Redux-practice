import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice.js";
import { postsApiSlice } from "./posts/postsApiSlice.js";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    [postsApiSlice.reducerPath]: postsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postsApiSlice.middleware);
  },
});
