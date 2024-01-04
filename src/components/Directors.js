import React from "react";
import { directors } from "../data";

function Directors() {
  return (<div>{/*{code here}*/}
  <h1>Directors Page</h1>
  <div >
  {directors.map((director) => {
    return(
      <main key={director.name}>
      <h3>{director.name}</h3> 
      <ul><li >{director.movies}</li></ul>
      </main>
    );
})}
  </div>
  </div>);
}

export default Directors;
