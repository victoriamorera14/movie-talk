import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

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
    width: 375,
    padding: 10,
    borderRadius: 10,
    margin:10,
    backgroundColor: colors.mainColors.secondary,
  },
  containerR: {
    height: "auto",
    width: 375,
    padding: 10,
    borderRadius: 10,
    margin:10,
    backgroundColor: colors.mainColors.gray2,
  },
  usuarioS: {
    fontSize: 18,
    paddingBottom:10,
    fontFamily: "Ubuntu-Bold",
    color: "white",
    textAlign: "right"
  },
  usuarioR: {
    fontSize: 18,
    paddingBottom:10,
    fontFamily: "Ubuntu-Bold",
    color: "white",
    textAlign: "left"
  },
  contenido: {
    fontSize: 14,
    color: "black",
    fontFamily: "Ubuntu-Regular",
  },
});
