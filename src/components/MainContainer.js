import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((state) => state?.movies?.nowplayingMovie);
  const newMovie = movies && movies[0];
  if (newMovie) {
    const { original_title, overview, id } = newMovie;
    return original_title && overview ? (
      <div>
        MainContainer
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    ) : (
      <></>
    );
  }
  return <>no data</>;
};

export default MainContainer;
