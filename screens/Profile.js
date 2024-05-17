import { View, Text } from "react-native";
import React from "react";
import UserCard from "../components/UserCard";
import Titulo from "../components/Titulo";
import SeccionUser from "../components/SeccionUser";
import Favourites from "./Favourites";
import { Pressable } from "react-native";

export default function Profile() {
  const handlePress = () => {
    navigation.navigate(Favourites);
  };

  return (
    <View>
      <Titulo text="Título de la página" showIcon={true} />

      <Pressable onPress={handlePress}>
        <UserCard
          image={require("../assets/user_image.jpg")}
          title={"Nombre Usuario"}
        />
      </Pressable>

      <SeccionUser
        iconLeft="person"
        texto="Nombre sección"
      />
    </View>
  );
}
