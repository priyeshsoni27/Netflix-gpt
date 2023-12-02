import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowplayingMovie: null,
    popularMovie: null,
    totRatedMovie: null,
    upCommingMovie: null,
    movieTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowplayingMovie = action.payload;
    },
    addPopulargMovies: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.totRatedMovie = action.payload;
    },
    addUpCommingMovies: (state, action) => {
      state.upCommingMovie = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailer, addPopulargMovies,addTopRatedMovies,addUpCommingMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
