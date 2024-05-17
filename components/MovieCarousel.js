import { View, Text } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import CarouselComponent from "./CarouselComponent";

export default function MovieCarousel({ info }) {
  console.log(info);

  return (
    <View style={{ backgroundColor: "blue" }}>
      <Carousel
        style={{ backgroundColor: "green" }}
        loop
        width={400}
        height={600}
        autoPlay={true}
        scrollAnimationDuration={1000}
        data={info}
        renderItem={({ movie }) => {
          // <CarouselComponent
          // key={movie.item.id}
          // description={movie.item.overview}
          // image={movie.item.poster_path}
          // />;
          console.log("kagjg");
          <Text style={{ backgroundColor: "red" }}>aaa {movie}</Text>;
        }}
      />
    </View>
  );
}
