import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-2xl px-2 pt-3 text-white">{title}</h1>
      <div className="flex overflow-auto p-4">
        <div className="flex">
          {movies?.map((movieList) => (
            <MovieCard
              key={movieList?.id}
              posterPath={movieList?.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
