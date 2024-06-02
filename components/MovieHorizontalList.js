import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { FlatList } from "react-native";
import { colors } from "../utils/colors";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

export default function MovieHorizontalList({ URL, isBigCard, title }) {

  const { isLoading, error, movies, ApiCall } = useFetch();

  useEffect(() => {
    ApiCall(URL);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      {isLoading && <Loader />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {movies && (<FlatList horizontal
        contentContainerStyle={styles.listContainer}
        data={movies.results}
        renderItem={({ item }) => (
          <MovieCard
            key={item.id}
            isBigCard={isBigCard}
            title={item.title}
            image={item.poster_path}
            movieId={item.id}
          />
        )}
      />)}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    backgroundColor: colors.mainColors.primary,
    marginBottom: 10,
  },
  title: {
    marginLeft: 10,
    marginTop: 10,
    fontFamily: "Ubuntu-Medium",
    fontSize: 25,
    color: "white",
  },
  listContainer: {
    flexDirection: "row",
    paddingLeft: 12,
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
});
