import { View, Text, Pressable} from "react-native";
import React from "react";
import UserCard from "../components/UserCard";
import Titulo from "../components/Titulo";
import SeccionUser from "../components/SeccionUser";
import Favourites from "./Favourites";

import { useNavigation } from "@react-navigation/native";

export default function Profile() {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Favourites");
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
      <Pressable
        onPress={handlePress}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}>
        <SeccionUser
          iconLeft="heart"
          texto="Favoritos"
        />
      </Pressable>
    </View>
  );
}
