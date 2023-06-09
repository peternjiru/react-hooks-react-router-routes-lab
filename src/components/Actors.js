import React from "react";
import { actors } from "../data";

function
  Actors() {
  return (
    <>
      <h1>Actors Page</h1>

      {

        actors.map((element) => {
          return (
            <div key={element.name}>
              <h2>Name: {element.name}</h2>
              <p>Movies:</p>
              <ul>
                {
                  element.movies.map((movie) => <li key={movie}>{movie}</li>)
                }
              </ul>
            </div>
          )
        })

      }

    </>
  )
}

export default Actors;
