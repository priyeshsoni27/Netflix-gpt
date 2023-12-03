
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constant";
import { addPopulargMovies } from "../utils/movieSlice";

const usePopularMoviehook = () => {
  const dispatch = useDispatch();
  const popularMovie=useSelector((store)=>store.movies.popularMovie)
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
