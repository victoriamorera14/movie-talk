import React, { useState, useEffect } from "react";

const API_KEY = "958f518b7c01a6e5b5898812c7a86c47";
const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

function Fetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  console.log("Ddddd");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setIsLoading(false);
      });
  }, []);

  return null;
}

export default Fetch;