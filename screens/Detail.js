import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Detail(route) {
  const { movieId } = route.params;

  const DETAILS_API_URL = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=${API_KEY}";

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState();
  const [error, setError] = useState(null);

  const ApiCall = async () => {
    setIsLoading(true);
    setError(null);
    console.log(movieId);

    try {
      const data = await Fetch(DETAILS_API_URL);
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
    <View style={styles.container}>
      {movie && (
        <>
          <Image
            source={{
              uri: movie.poster_path,
            }}
          />
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
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
  },
});

