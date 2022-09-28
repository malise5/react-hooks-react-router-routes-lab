import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList = directors.map((director) => (
    <div key ={director.name}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie) =>(
          <l1 key={movie}>{movie}</l1>
        ))}
      </ul>
    </div>
  ))
  return <div>
          <h1>Directors Page</h1>
          {directorsList}
  </div>;
}

export default Directors;
