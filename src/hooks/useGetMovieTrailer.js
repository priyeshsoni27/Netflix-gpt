import React, { useEffect } from "react";
import { API_options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useGetMovieTrailer = () => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_options
    );
    const json = await data.json();
    const filterData = json?.results?.filter(
      (item) => item?.type === "Trailer"
    );
    const trailer = filterData?.length ? filterData : json?.results[0];
    dispatch(addMovieTrailer(trailer));
    console.log(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useGetMovieTrailer;
