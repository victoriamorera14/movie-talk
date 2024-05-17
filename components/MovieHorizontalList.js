import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MovieCard from "./MovieCard";
import { FlatList } from "react-native";
import { colors } from "../utils/colors";

export default function MovieHorizontalList({
  isBigCard,
  title,
  lenght,
  image,
}) {
  const cardList = [];
  for (let i = 0; i < lenght; i++) {
    cardList.push(
      <MovieCard isBigCard={isBigCard} image={image} title={"Dune 2"} key={i} />
    );
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.listContainer}>{cardList}</View>
      {/*<FlatList
        data={cardList}
        renderItem={({ item }) => <MovieCard key={item} />}
        keyExtractor={(item) => item}
  ></FlatList>*/}
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
    fontSize: 25,
    color: "white",
  },
  listContainer: {
    flexDirection: "row",
    paddingLeft: 12,
  },
});
