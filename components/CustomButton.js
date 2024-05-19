import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, StyleSheet, View, Pressable } from "react-native";

export default function CustomButton({
  onPress,
  text,
  iconSource,
  width,
  height,
  defaultColor,
  pressedColor,
  borderRadius,
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      underlayColor={pressedColor}
      style={[
        styles.button,
        {
          width,
          height,
          backgroundColor: pressed ? pressedColor : defaultColor,
          borderRadius,
        },
      ]}
      onPressIn={() => setPressed(true)}
      onPressOut={() => {
        setPressed(false);
      }}
    >
      <View style={styles.content}>
        {text && <Text style={styles.buttonText}>{text}</Text>}
        {iconSource && (
          <Ionicons name={iconSource} size={22} color={"white"} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontFamily: "Ubuntu-Bold",
  },
});
