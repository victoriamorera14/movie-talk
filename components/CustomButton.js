import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CustomButton({ onPress, text, width, height, color }) {
  const handlePress = () => {
    onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, { width, height, backgroundColor: color }]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
