import { View, Text, Pressable, StyleSheet } from "react-native";
import React from 'react'
import UserCard from "../components/UserCard";
import { colors } from "../utils/colors";
import Loader from "../components/Loader";
import SearchFilter from "../components/SearchFilter";

export default function LogIn() {
  return (
    <View style={styles.container}>
        <Text>LOG IN</Text>
        <UserCard></UserCard>
        <SearchFilter></SearchFilter>
        <SearchFilter></SearchFilter>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      height: "100%",
      width:"100%",
      padding: 50,
      backgroundColor: colors.mainColors.primary,
      flexDirection:"column",
      gap: 20,
    },
  });