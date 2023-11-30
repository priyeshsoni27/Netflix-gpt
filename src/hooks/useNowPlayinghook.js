import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayinghook = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_options
    );
    const json = await data.json();
    console.log("hooking the json",json);
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayinghook;
