import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Titulo from "../components/Titulo";
import MovieHorizontalList from "../components/MovieHorizontalList";
import CarouselComponent from "../components/CarouselComponent";
import API_KEY from "../api/API_KEY";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const POPULAR_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const TRENDING_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

  return (
    <View>
      <MovieHorizontalList
        URL={TRENDING_API_URL}
        isBigCard={true}
        title={"Trending"}
      />
      <MovieHorizontalList 
        URL={POPULAR_API_URL}
        isBigCard={false}
        title={"Popular"}
      />
    </View>
  );
}
