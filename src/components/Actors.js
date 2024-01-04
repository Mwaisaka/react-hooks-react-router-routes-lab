import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>{/*{code here}*/}
  <h1>Actors Page</h1>
  <div >
  {actors.map((actor) => {
    return(
      <main key={actor.name}>
      <h3>{actor.name}</h3> 
      <ul><li >{actor.movies}</li></ul>
      </main>
    );
})}
  </div>
  </div>;
}

export default Actors;
