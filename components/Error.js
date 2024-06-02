import { Text, StyleSheet } from "react-native";
export default function Error({ message }) {
  return <Text style={styles.error}>{message}</Text>;
}

const styles = StyleSheet.create({
  error: {
    backgroundColor: "red",
    color: "white",
    padding: 5,
  }, 
});
