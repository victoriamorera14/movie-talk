import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import API_KEY from "../api/API_KEY";
import { Fetch } from "../api/API";


export default function Detail({ route }) {
  const { movieId } = route.params;
  

  console.log(movieId);

  const DETAILS_API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  console.log(DETAILS_API_URL);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState();
  const [error, setError] = useState(null);

  const ApiCall = async () => {
    setIsLoading(true);
    setError(null);
    console.log("fetch");
    try {
      const data = await Fetch(DETAILS_API_URL);
      console.log("data", data);
      setMovies(data);
    } catch (e) {
      console.log("error", e);
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    ApiCall();
  }, []);

  return (
    <View style={styles.container}>
      <Text>AAAAAAAA</Text>

      {movies && (
        <>
          <Image style={styles.image} source={`http://image.tmdb.org/t/p/w500/${movies.backdrop_path}`} />
        </>
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
    aspectRatio: 1
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
  },
});
