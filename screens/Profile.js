import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import UserCard from "../components/UserCard";
import SeccionUser from "../components/SeccionUser";
import Favorites from "./Favorites";

import { useNavigation } from "@react-navigation/native";
import { colors } from "../utils/colors";

export default function Profile() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Favorites");
  };

  return (
    <View style={styles.profileContainer}>
      <Pressable onPress={handlePress}>
        <UserCard
          image={require("../assets/user_image.jpg")}
          title={"Nombre Usuario"}
          userHeight={200}
          userWidth={180}
        />
      </Pressable>
      <Pressable onPress={handlePress}>
        <SeccionUser iconLeft="heart" texto="Favoritos" />
      </Pressable>
      <Pressable>
        <SeccionUser iconLeft="people" texto="Social" />
      </Pressable>
      <Pressable >
        <SeccionUser iconLeft="chatbox-ellipses-outline" texto="Chats" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: colors.mainColors.primary,
    flexDirection: "column",
    alignItems:"center",
  },
});

