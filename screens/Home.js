import { View, Text } from "react-native";
import React from "react";
import Titulo from "../components/Titulo";
import MovieHorizontalList from "../components/MovieHorizontalList";
import CarouselComponent from "../components/CarouselComponent";

export default function Home() {
  return (
    <View>
      <Titulo text="Título de la página" showIcon={true} />
      <MovieHorizontalList
        isBigCard={true}
        lenght={5}
        title={"Acción"}
        image={require("../assets/dune_poster.jpg")}
      />
      <CarouselComponent
        image={require("../assets/dune_poster.jpg")}
        description={
          "Duis in tempor fugiat minim non. Et ex minim laborum eu reprehenderit amet exercitation Lorem minim esse eiusmod duis. Velit id irure pariatur dolore Lorem minim reprehenderit laborum non pariatur. Elit excepteur tempor in nulla est. Deserunt Lorem et aliqua magna qui."
        }
      />
    </View>
  );
}
