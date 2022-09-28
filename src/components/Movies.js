import React from "react";
import { movies } from "../data";

function Movies() {
  
  const movieList = movies.map((movie) =>(
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time} minute</p>
      <ul>
        {movie.genres.map((genre) =>(
          <l1 key={genre}>{genre}</l1>
        ))}
      </ul>
    </div>
  ))

  return <div>
          <h1>Movie Page</h1>
          {movieList}
  </div>;
}

export default Movies;
