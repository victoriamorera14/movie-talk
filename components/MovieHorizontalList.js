import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MovieCard from "./MovieCard";
import { FlatList } from "react-native";
import { colors } from "../utils/colors";

export default function MovieHorizontalList({ isBigCard, title, data }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={data}
        renderItem={({ item }) => (
          <MovieCard
            key={item.id}
            isBigCard={isBigCard}
            title={item.title}
            image={item.poster_path}
            movie={item.id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    backgroundColor: colors.mainColors.primary,
  },
  title: {
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "600",
    fontSize: 125,
    color: "grey",
  },
  listContainer: {
    flexDirection: "row",
    paddingLeft: 12,
  },
});
