import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import UserCard from "../components/UserCard";
import { colors } from "../utils/colors";
import Loader from "../components/Loader";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import SearchFilterLogin from "../components/SearchFilterLogin";
import { supabase } from "../utils/supabaseClient";

export default function LogIn() {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const navigation = useNavigation();

  const handleSignIn = async () => {
    const { email, password } = userCredentials;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setErrorMsg(error.message);
    } else {
      console.log(data);
    }
  };

  const handleInputChange = (text, name) => {
    setUserCredentials((prev) => {
      const newCred = { ...prev, [name]: text };
      console.log(newCred);
      return newCred;
    });
  };

  const handleNavigation = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Movie Talk</Text>
      <Text style={styles.loginTitle}>LOG IN</Text>
      <View style={styles.mainContainer}>
        <UserCard
          image={require("../assets/user_image.jpg")}
          userHeight={150}
          userWidth={150}
        />
        <View style={styles.loginContainer}>
          <SearchFilterLogin
            showIconRight={false}
            fieldName={"email"}
            setLoginText={handleInputChange}
          />
          <SearchFilterLogin
            showIconRight={true}
            fieldName={"password"}
            setLoginText={handleInputChange}
          />
        </View>
        <CustomButton
          text={"Enter"}
          width={"150"}
          height={"75"}
          defaultColor={colors.mainColors.secondary}
          borderRadius={15}
          onPress={handleSignIn}
        />
        <Text>If you havn't registered yet, you can click</Text>
        <Pressable onPress={handleNavigation}>
          <Text>Here</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 50,
    backgroundColor: colors.mainColors.primary,
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  mainContainer: {
    width: "100%",
    gap: 50,
    flexDirection: "column",
    alignItems: "center",
  },
  loginContainer: {
    gap: 20,
    width: "100%",
  },
  appTitle: {
    marginTop: 100,
    color: "white",
    fontSize: 18,
  },
  loginTitle: {
    color: colors.mainColors.secondary,
    fontSize: 30,
  },
});
