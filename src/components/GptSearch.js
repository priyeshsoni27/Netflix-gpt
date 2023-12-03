import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div >
      <img alt="" className="absolute fixed " src={BG_URL} />
      <br />
      <br /> <br />
      <br />
      <GptSearchBar />
      <br />
      <br />
      <br />
      <br />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
