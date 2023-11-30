import { createSlice } from "@reduxjs/toolkit";




const movieSlice=createSlice({
    name:'movie',
    initialState:{
        nowplayingMovie:null,
        movieTrailer:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowplayingMovie=action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addMovieTrailer} =movieSlice.actions;
export default movieSlice.reducer