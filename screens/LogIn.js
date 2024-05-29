import { View, Text, Pressable, StyleSheet } from "react-native";
import React from 'react'
import UserCard from "../components/UserCard";
import { colors } from "../utils/colors";
import Loader from "../components/Loader";
import SearchFilter from "../components/SearchFilter";
import CustomButton from "../components/CustomButton";

export default function LogIn() {
  return (
    <View style={styles.container}>
        <Text style={styles.appTitle}>Movie Talk</Text>
        <Text style={styles.loginTitle}>LOG IN</Text>
        <View style={styles.mainContainer}>
          <UserCard
          image={require("../assets/user_image.jpg")}
          userHeight={150}
          userWidth={150}
          ></UserCard>
          <View style={styles.loginContainer}>
            <SearchFilter
            showIconLeft={false}
            showIconRight={false}
            ></SearchFilter>
            <SearchFilter
            showIconLeft={false}
            showIconRight={true}
            ></SearchFilter>
          </View>
          <CustomButton
          text={"Enter"}
          width={"150"}
          height={"75"}
          defaultColor={colors.mainColors.secondary}
          borderRadius={15}
          ></CustomButton>
        </View>
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
      alignItems:"center",
      gap: 20,
    },
    mainContainer:{
      width:"100%",
      gap: 50,
      flexDirection:"column",
      alignItems:"center",
    },
    loginContainer: {
      gap: 20,
      width:"100%",
    },
    appTitle:{
      marginTop: 100,
      color:"white",
      fontSize: 18,
    },
    loginTitle:{
      color: colors.mainColors.secondary,
      fontSize: 30,
    }
  });