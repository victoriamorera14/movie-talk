import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Mensaje({isSender, UserName, TextoMensaje}) {
  return (
    <View style={isSender ? styles.containerS : styles.containerR}>
      <Text style={isSender ? styles.usuarioS : styles.usuarioR}>
      {UserName}
      </Text>
      <Text style={styles.contenido}>
      {TextoMensaje}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerS: {
    height: "auto",
    width: 414,
    padding: 10,
    borderRadius: 10,
    margin:10,
    backgroundColor: "#E92348",
  },
  containerR: {
    height: "auto",
    width: 414,
    padding: 10,
    borderRadius: 10,
    margin:10,
    backgroundColor: "#A09BB0",
  },
  usuarioS: {
    fontSize: 18,
    paddingBottom:10,
    fontWeight: "bold",
    color: "white",
    textAlign: "right"
  },
  usuarioR: {
    fontSize: 18,
    paddingBottom:10,
    fontWeight: "bold",
    color: "white",
    textAlign: "left"
  },
  contenido: {
    fontSize: 14,
    color: "black", 
  },
});
