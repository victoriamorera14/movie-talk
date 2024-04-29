import React, { useState } from "react";
import { TouchableHighlight, Text, StyleSheet, View } from "react-native";

export default function CustomButton({ onPress, text, width, height, defaultColor, pressedColor }) {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={pressedColor} 
      style={[
        styles.button,
        { width, height, backgroundColor: pressed ? pressedColor : defaultColor }, 
      ]}
      onPressIn={() => setPressed(true)} 
      onPressOut={() => setPressed(false)} 
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableHighlight>
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
