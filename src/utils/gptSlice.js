import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
    showGptSearch:false,
    movieNames:null,
    movieResult:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovies:(state,action)=>{
            const{movieNames,movieResults}=action.payload
            state.movieNames=movieNames;
            state.movieResult=movieResults;
        }
    }
})

export const {toggleGptSearchView,addGptMovies}=gptSlice.actions;

export default gptSlice.reducer