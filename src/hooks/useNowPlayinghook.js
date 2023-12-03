import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayinghook = () => {
  const dispatch = useDispatch();
  const nowPlaying=useSelector((store)=>store.movies.nowplayingMovie)
  const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    !nowPlaying &&getNowPlayingMovies();
  }, []);
};

export default useNowPlayinghook;
