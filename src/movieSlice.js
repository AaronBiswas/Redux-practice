import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchusers = createAsyncThunk("Movies/users", async () => {
  const names = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await names.json();
  return data.map((username) => username.name);
});

const initialState = {
  movies: [
    { id: 1, name: "Film 1" },
    { id: 2, name: "Film 2" },
  ],
  users: [],
};

const movieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        id: state.movies[state.movies.length - 1].id + 1,
        name: action.payload,
      };
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchusers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;

export default movieSlice.reducer;
