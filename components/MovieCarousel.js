import { View } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import CarouselComponent from "./CarouselComponent";

export default function MovieCarousel({ info }) {
  return (
    <View>
      <Carousel
        width={400}
        height={600}
        data={info}
        renderItem={(movie) => {
          <CarouselComponent
            key={movie.item.id}
            description={movie.item.overview}
            image={movie.item.poster_path}
          />;
        }}
      />
    </View>
  );
}
