import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import API_KEY from "../api/API_KEY";
import { Fetch } from "../api/API";
import useFetch from "../hooks/useFetch";

export default function Detail({ route }) {
  const { movieId } = route.params;

  const DETAILS_API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

  const imagePath = "http://image.tmdb.org/t/p/w500/";
  const { isLoading, error, movies, ApiCall } = useFetch();

  useEffect(() => {
    ApiCall(DETAILS_API_URL);
  }, []);

  return (
    <View style={styles.container}>
      {movies && (
        <Image
          style={styles.image}
          source={`${imagePath}${movies.backdrop_path}`}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
  },
});
