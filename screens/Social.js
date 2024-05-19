import { View, Text, StyleSheet } from "react-native";
import React from "react";
import UserCard from "../components/UserCard";
import { colors } from "../utils/colors";

export default function Social() {
  return (
    <View style={styles.socialContainer}>
      <View style={styles.cardWrapper}>
        <UserCard
          image={require("../assets/user_image.jpg")}
          title={"Nombre Usuario"}
          userHeight={100}
          userWidth={100}
        />
      </View>
      <View style={styles.cardWrapper}>
        <UserCard
          image={require("../assets/user_image.jpg")}
          title={"Nombre Usuario"}
          userHeight={100}
          userWidth={100}
        />
      </View>
      <View style={styles.cardWrapper}>
        <UserCard
          image={require("../assets/user_image.jpg")}
          title={"Nombre Usuario"}
          userHeight={100}
          userWidth={100}
        />
      </View>
      <View style={styles.cardWrapper}>
        <UserCard
          image={require("../assets/user_image.jpg")}
          title={"Nombre Usuario"}
          userHeight={100}
          userWidth={100}
        />
      </View>
      <View style={styles.cardWrapper}>
        <UserCard
          image={require("../assets/user_image.jpg")}
          title={"Nombre Usuario"}
          userHeight={100}
          userWidth={100}
        />
      </View>
      <View style={styles.cardWrapper}>
        <UserCard
          image={require("../assets/user_image.jpg")}
          title={"Nombre Usuario"}
          userHeight={100}
          userWidth={100}
        />
      </View>
      <View style={styles.cardWrapper}>
        <UserCard
          image={require("../assets/user_image.jpg")}
          title={"Nombre Usuario"}
          userHeight={100}
          userWidth={100}
        />
      </View>
      <View style={styles.cardWrapper}>
        <UserCard
          image={require("../assets/user_image.jpg")}
          title={"Nombre Usuario"}
          userHeight={100}
          userWidth={100}
        />
      </View>
      <View style={styles.cardWrapper}>
        <UserCard
          image={require("../assets/user_image.jpg")}
          title={"Nombre Usuario"}
          userHeight={100}
          userWidth={100}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  socialContainer: {
    padding: 15,
    backgroundColor: colors.mainColors.primary,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardWrapper: {
    margin: 10,
  },
});
