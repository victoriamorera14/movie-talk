import { View, Text } from "react-native";
import React from "react";
import Titulo from "../components/Titulo";
import AccesoChat from "../components/AccesoChat";
import DropdownComponent from "../components/Desplegable";

export default function Chats() {
  return (
    <View>
      <AccesoChat
        firstLineText="Título del chat"
        secondLineText="Último mensaje enviado"
      />
    </View>
  );
}
