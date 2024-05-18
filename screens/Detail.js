import { View, Text, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import React, { useEffect } from "react";
import API_KEY from "../api/API_KEY";
import useFetch from "../hooks/useFetch";

export default function Detail({ route }) {
  const { movieId } = route.params;

  const DETAILS_API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

  const imagePath = "http://image.tmdb.org/t/p/w500/";
  const { isLoading, error, movies, ApiCall } = useFetch();

  useEffect(() => {
    ApiCall(DETAILS_API_URL);
  }, []);

  console.log(DETAILS_API_URL)

  return (
    <ScrollView style={styles.container}>
      {movies && (
        <>
          <Image
            style={styles.image}
            source={{ uri: `${imagePath}${movies.backdrop_path}` }}
          />
          <Text style={styles.title}>{movies.title}</Text>
          <View style={styles.genresContainer}>
            {movies.genres.map((genre) => (
              <Text key={genre.id} style={styles.genre}>
                {genre.name}
              </Text>
            ))}
          </View>
          <Text style={styles.overview}>{movies.overview}</Text>
          <Text style={styles.vote}>Rating: {movies.vote_average}</Text>
          <Text style={styles.platforms}>Available on:</Text>
          {/* {movies.production_companies.map((company) => (
            <Text key={company.id} style={styles.company}>
              {company.name}
            </Text>
          ))} */}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 10,
  },
  vote: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  platforms: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  company: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
  },
  genre: {
    fontSize: 16,
    marginHorizontal: 5,
    marginBottom: 5,
    textAlign: "center",
  },
});