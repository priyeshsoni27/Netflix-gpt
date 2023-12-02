import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-40 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowplayingMovie} />
        <MovieList title={"Popular"} movies={movies?.popularMovie} />
        <MovieList title={"Up Comming"} movies={movies?.upCommingMovie} />
        <MovieList title={"Top Rated"} movies={movies?.totRatedMovie} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
