
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRateMoviehook = () => {
  const dispatch = useDispatch();
  const topRated= useSelector((store)=>store.movies.totRatedMovie)
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
  };

  useEffect(() => {
    !topRated && getTopRatedMovies();
  }, []);
};

export default useTopRateMoviehook;
