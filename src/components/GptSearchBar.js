import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_options } from "../utils/constant";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.langConfig.lang);
  const searchValue = useRef(null);

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=%22%20${movie}%22&include_adult=false&&page=1`,
      API_options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    console.log(searchValue.current.value);
    const gtpQuery = `Act as a movie reccomedation system and suggest some movie for the query ${searchValue.current.value} and provide only name of 5 movie, comma separated like the example given ahead. Example: Animan, leo, Sholay, Don, All the Best`;
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gtpQuery }],
      model: "gpt-3.5-turbo",
    });
    const gtpSearchedMovies =
      chatCompletion?.choices[0]?.message?.content.split(",");
    const data = gtpSearchedMovies.map((moviesList) =>
      searchMoviesTMDB(moviesList)
    );
    const tmdbResults = await Promise.all(data);
    dispatch(
      addGptMovies({ movieNames: gtpSearchedMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[-20%] flex justify-center absolute z-20">
      <form
        className="w-full bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchValue}
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptplaceholder}
          type="text"
        />
        <button
          onClick={handleGptSearch}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
