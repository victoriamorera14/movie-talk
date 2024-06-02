import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../utils/colors";
import { favorites } from "../utils/favorites";
import { observer } from "mobx-react-lite";

export default observer (function FavoriteMarkDetails({ movieId }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Pressable
          onPress={() => {
            setFavorite(!favorite);
            favorites.toggle(movieId);
          }}
        >
          <Ionicons
            name="heart"
            size={25}
            style={
              (favorites.isFavorite(movieId) ? styles.activeHeartIcon : styles.notActiveHeartIcon)
            }
          />
        </Pressable>
      </View>
    </View>
  );
}
)

const styles = StyleSheet.create({
  mainContainer: {
    alignContent: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  innerContainer: {
    backgroundColor:"black",
    borderRadius: 10,
  },
  activeHeartIcon: {
    margin: 3,
    zIndex: 99,
    color: colors.mainColors.secondary,
  },
  notActiveHeartIcon: {
    margin: 3,
    zIndex: 99,
    color: colors.mainColors.gray1,
  },
  markIcon: {
    color: "black",
    opacity: 0.8,
  },
});
