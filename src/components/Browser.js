import React from "react";
import Header from "./Header";
import useNowPlayinghook from "../hooks/useNowPlayinghook";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMoviehook from "../hooks/usePopularMoviehook";
import useTopRateMoviehook from "../hooks/useTopRateMoviehook";
import useUpCommingMovieHook from "../hooks/useUpCommingMovieHook";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browser = () => {
  const gptSearchView = useSelector((store) => store?.gptItem?.showGptSearch);

  useNowPlayinghook();
  usePopularMoviehook();
  useTopRateMoviehook();
  useUpCommingMovieHook();

  return (
    <div>
      <Header />
      {gptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
