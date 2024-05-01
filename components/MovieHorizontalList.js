import { View, Text } from "react-native";
import React from "react";
import MovieCard from "./MovieCard";

export default function MovieHorizontalList({ isBigCard, title, lenght, image }) {
  const cardList = () => {
    for (let i = 0; i < lenght; i++) {
      cardList.push(
        <MovieCard
          isBigCard={isBigCard}
          image={image}
          title={"Dune 2"}
        />
      );
    }
  };
  return (
    <View>
      <Text>{title}</Text>
      <View>{cardList}</View>
    </View>
  );
}
