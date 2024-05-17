import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../utils/colors";

export default function FavoriteMark() {
  const [favorite, setFavorite] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Ionicons name="bookmark" size={35} style={styles.markIcon}></Ionicons>
      <View style={styles.innerContainer}>
        <Pressable onPress={() => setFavorite(!favorite)}>
          <Ionicons
            name="heart"
            size={15}
            style={
              favorite ? styles.activeHeartIcon : styles.notActiveHeartIcon
            }
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignContent: "center",
    justifyContent: "center",
  },
  innerContainer: {
    position: "absolute",
    left: 10,
    top: 6.5,
  },
  activeHeartIcon: {
    zIndex: 99,
    color: colors.mainColors.secondary,
  },
  notActiveHeartIcon: {
    zIndex: 99,
    color: colors.mainColors.gray1,
  },
  markIcon: {
    color: "black",
    opacity: 0.8,
  },
});
