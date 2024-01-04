import React from "react";
import { movies } from "../data";

function Movies() {
  
  return (
  <div>{/*{code here}*/}
  <h1>Movies Page</h1>
  <div key={movies}>
  {movies.map((movie) => {
    return(
      <main key={movie.title}>
          <h3>{movie.title}</h3> 
      <h4>{movie.time}</h4>
      <ul><li >{movie.genres}</li></ul>
      </main>
    );
})}
  </div>
  </div>
  
  );
}

export default Movies;
