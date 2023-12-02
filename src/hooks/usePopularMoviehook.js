
import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../utils/constant";
import { addPopulargMovies } from "../utils/movieSlice";

const usePopularMoviehook = () => {
  const dispatch = useDispatch();
  const getPolularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addPopulargMovies(json?.results));
  };

  useEffect(() => {
    getPolularMovies();
  }, []);
};

export default usePopularMoviehook;
