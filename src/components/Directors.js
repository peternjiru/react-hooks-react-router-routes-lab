import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <>
      <h1>Directors Page</h1>


    {
      directors.map((element) => {

        return(
        <div key={element.name}>
          <h2>Name: {element.name}</h2>
          <p>Movies:</p>
          <ul> 

          {element.movies.map((movie) => <li key={movie}>{movie}</li>)}
      
          </ul>
          </div>
        )
      })

    }


    </>
  )
}

export default Directors;
