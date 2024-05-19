import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import UserCard from "../components/UserCard";
import SeccionUser from "../components/SeccionUser";

import { useNavigation } from "@react-navigation/native";
import { colors } from "../utils/colors";
import { Line } from "react-native-svg";

export default function Profile() {
  const navigation = useNavigation();

  const handleFavoritePress = () => {
    navigation.navigate("Favorites");
  };

  const handleSocialPress = () => {
    navigation.navigate("Social");
  };

  const handleChatPress = () => {
    navigation.navigate("ChatTab");
  };

  return (
    <View style={styles.profileContainer}>
      <UserCard
        image={require("../assets/user_image.jpg")}
        userHeight={230}
        userWidth={280}
      />
      <Text style={styles.usernameStyle}>Nombre Usuario</Text>
      <View style={styles.usernameLine}></View>
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
    alignItems: "center",
  },
  usernameStyle: {
    margin: 25,
    marginTop: 33,
    fontFamily: "Ubuntu-Bold",
    color: "white",
    fontSize: 20,
  },
  usernameLine: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
    width: 400,
    marginBottom: 8,
  },
});
