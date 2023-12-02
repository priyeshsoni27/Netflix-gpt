
import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../utils/constant";
import {addUpCommingMovies } from "../utils/movieSlice";

const useUpCommingMovieHook = () => {
  const dispatch = useDispatch();
  const getUpCommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addUpCommingMovies(json?.results));
  };

  useEffect(() => {
    getUpCommingMovies();
  }, []);
};

export default useUpCommingMovieHook;
