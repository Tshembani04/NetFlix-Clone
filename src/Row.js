import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

//Pass in the props to destructure the component
function Row({ title, fetchUrl, isLargeRow = false }) {
  //Create a variable which contains the movies
  //and pass an empty array of movies
  //inside the [] we include the fetchUrl dependancy
  //returning request to cut out the function to handle codesets
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  //   console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      {/*For every single movie im going to return an image of the different films that you will see!
      For the image we gonna interpolate 
      */}

      <div className="row_posters">
        {movies.map((movie) => (
           (( isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                
                
                
          <img
            className={`row_poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
           )
        ))}
      </div>
    </div>
  );
}

export default Row;
