import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import UserCard from "../components/UserCard";
import SeccionUser from "../components/SeccionUser";
import Favorites from "./Favorites";

import { useNavigation } from "@react-navigation/native";
import { colors } from "../utils/colors";

export default function Profile() {
  const navigation = useNavigation();

  const handleFavoritePress = () => {
    navigation.navigate("Favorites");
  };

  const handleSocialPress = () => {
    navigation.navigate("Social");
  };

  const handleChatPress = () => {
    navigation.navigate("Chat");
  };

  return (
    <View style={styles.profileContainer}>
      <Pressable onPress={handleFavoritePress}>
        <UserCard
          image={require("../assets/user_image.jpg")}
          title={"Nombre Usuario"}
          userHeight={200}
          userWidth={180}
        />
      </Pressable>
      <Pressable onPress={handleFavoritePress}>
        <SeccionUser iconLeft="heart" texto="Favoritos" />
      </Pressable>
      <Pressable onPress={handleSocialPress}>
        <SeccionUser iconLeft="people" texto="Social" />
      </Pressable>
      <Pressable onPress={handleChatPress}>
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

