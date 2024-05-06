import { View, Text } from "react-native";
import React from "react";
import UserCard from "../components/UserCard";
import Titulo from "../components/Titulo";
import SeccionUser from "../components/SeccionUser";

export default function Profile() {
  return (
    <View>
      <Titulo text="Título de la página" showIcon={true} />
      <UserCard
        image={require("../assets/user_image.jpg")}
        title={"Nombre Usuario"}
      />
      <SeccionUser
        iconLeft="person"
        texto="Nombre sección"
        containerColor="#373246"
      />
    </View>
  );
}
