import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Titulo from "../components/Titulo";
import MovieHorizontalList from "../components/MovieHorizontalList";
import CarouselComponent from "../components/CarouselComponent";
import API_KEY from "../api/API_KEY";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const POPULAR_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const DETAILS_API_URL = `https://api.themoviedb.org/3/movie/940721?api_key=${API_KEY}`;
  const TRENDING_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

  const { isLoading, error, movies, ApiCall } = useFetch();

  useEffect(() => {
    ApiCall(TRENDING_API_URL);
  }, []);

  return (
    <View>
      <Titulo text="Home" showIcon={false} />
      {movies && (
        <MovieHorizontalList
          isBigCard={true}
          data={movies.results}
        />
      )}
    </View>
  );
}
