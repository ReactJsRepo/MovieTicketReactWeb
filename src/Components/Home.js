import React from "react";
import LatestMovieList from './LatestMovieList'
import MovieCarousel from "./MovieCarousel";

/***** Carousel and Recommended Movies Page *****/

function Home() {

  return (
    <div>
      <div>
      <MovieCarousel/>
      </div>
      <div>
        <br/>
        <h1 className={"text-center"}>Recommended Movies</h1>
        <LatestMovieList />
      </div>
    </div>

  );
}

export default Home;
