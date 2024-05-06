import { View, Text } from "react-native";
import React from "react";
import MovieCard from "../components/MovieCard";
import SearchFilter from "../components/SearchFilter";
import CustomButton from "../components/CustomButton";

export default function Search() {
  return (
    <View>
      <Text>Search</Text>
      <MovieCard
        isBigCard={true}
        image={require("../assets/dune_poster.jpg")}
        title={"Dune 2"}
      />
      <SearchFilter showIconLeft={true} showIconRight={true} />
      <CustomButton
        text="Open chat"
        width={300}
        height={50}
        borderRadius={45}
        defaultColor={"#84C38D"}
        pressedColor={"#373246"}
      />{" "}
    </View>
  );
}
