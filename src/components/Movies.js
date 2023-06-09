import React from "react";
import { movies } from "../data";

function Movies() {

  return (
    <>
      <h1>Movies Page</h1>

      {

        movies.map((element) => {
          return (
            <div key={element.title}>
              <h2>Name: {element.title}</h2>
              <p>Time: {element.time}</p>
              <p>Genres:</p>
              <ul>
                {

                  element.genres.map((item) => <li key={item}>{item}</li>)
                  

                }
              </ul>
            </div>
          )
        })

      }
    </>
  )
}

export default Movies;
