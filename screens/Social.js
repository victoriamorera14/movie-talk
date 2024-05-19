import { View, Text, StyleSheet } from "react-native";
import React from "react";
import UserCard from "../components/UserCard";
import { colors } from "../utils/colors";

export default function Social() {
  return (
    <View style={styles.socialContainer}>
      <UserCard
        image={require("../assets/user_image.jpg")}
        title={"Nombre Usuario"}
        userHeight={100}
        userWidth={100}
      />
      <UserCard
        image={require("../assets/user_image.jpg")}
        title={"Nombre Usuario"}
        userHeight={100}
        userWidth={100}
      />
      <UserCard
        image={require("../assets/user_image.jpg")}
        title={"Nombre Usuario"}
        userHeight={100}
        userWidth={100}
      />
      <UserCard
        image={require("../assets/user_image.jpg")}
        title={"Nombre Usuario"}
        userHeight={100}
        userWidth={100}
      />
      <UserCard
        image={require("../assets/user_image.jpg")}
        title={"Nombre Usuario"}
        userHeight={100}
        userWidth={100}
      />
      <UserCard
        image={require("../assets/user_image.jpg")}
        title={"Nombre Usuario"}
        userHeight={100}
        userWidth={100}
      />
      <UserCard
        image={require("../assets/user_image.jpg")}
        title={"Nombre Usuario"}
        userHeight={100}
        userWidth={100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  socialContainer: {
    padding: 15,
    backgroundColor: colors.mainColors.primary,
    alignItems: "center",
  },
});
