import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResult, movieNames } = useSelector((store) => store.gptItem);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-2 bg-black text-white bg-opacity-70  -mb-30 relative z-20">
      <div>
        <h1>Movie Suggestions</h1>
        {movieNames?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
