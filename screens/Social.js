import { View, Text, StyleSheet } from "react-native";
import React from "react";
import UserCard from "../components/UserCard";
import { colors } from "../utils/colors";

export default function Social() {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height: "100%",
    width: "100%",
    backgroundColor: colors.mainColors.primary,
    alignItems: "center",
    padding: 20,
  },
  socialContainer: {
    width: "100%",
    backgroundColor: colors.mainColors.primary,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  cardWrapper: {
    margin: 10,
  },
});
