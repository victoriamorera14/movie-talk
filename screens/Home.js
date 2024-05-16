import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Titulo from "../components/Titulo";
import MovieHorizontalList from "../components/MovieHorizontalList";
import CarouselComponent from "../components/CarouselComponent";
import { Fetch } from "../api/API";
import API_KEY from "../api/API_KEY";
import MovieCarousel from "../components/MovieCarousel";


export default function Home() {
  
  const POPULAR_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const DETAILS_API_URL = `https://api.themoviedb.org/3/movie/940721?api_key=${API_KEY}`;
  const TRENDING_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;


  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState();
  const [error, setError] = useState(null);

  const ApiCall = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await Fetch(TRENDING_API_URL);
      setMovies(data.results);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    ApiCall();
  }, []);

  return (
    <View>
      {movies && <MovieCarousel key={movies.id} info={movies}/>}
      <Titulo text="Título de la página" showIcon={true} />
    </View>
  );
}
      {/*<Titulo text="Título de la página" showIcon={true} />
      <MovieHorizontalList
        isBigCard={true}
        lenght={5}
        title={"Acción"}
        image={require("../assets/dune_poster.jpg")}
  /> */}
