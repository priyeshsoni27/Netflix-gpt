import React, { useEffect } from "react";
import { API_options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store)=>store.movies.movieTrailer)
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_options
    );
    const json = await data.json();
    const filterData = json?.results?.filter(
      (item) => item?.type === "Trailer"
    );
    const trailer = filterData&&  (filterData?.length ? filterData : json?.results[0]);
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
   !movieTrailer && getMovieVideos();
  }, []);
};

export default useGetMovieTrailer;
