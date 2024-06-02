import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import UserCard from "../components/UserCard";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import SearchFilterLogin from "../components/SearchFilterLogin";
import { supabase } from "../utils/supabaseClient";
import Loader from "../components/Loader";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function LogIn() {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const handleSignIn = async () => {
    setIsLoading(true);
    const { email, password } = userCredentials;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setIsLoading(false);
    if (error) {
      setErrorMsg(error.message);
    } else {
      console.log(data);
    }
  };

  const handleInputChange = (text, name) => {
    setUserCredentials((prev) => {
      const newCred = { ...prev, [name]: text };
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
      <Ionicons
      name={"person"}
      size={100}
      style={styles.icono}
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
          width={160}
          height={50}
          defaultColor={colors.mainColors.secondary}
          pressedColor={colors.mainColors.gray3}
          borderRadius={50}
          onPress={handleSignIn}
        />
        {isLoading && <Loader />}
        {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>If you don't have an account</Text>
          <Pressable onPress={handleNavigation}>
            <Text style={styles.registerPressableText}> Register here</Text>
          </Pressable>
        </View>
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
    gap: 30,
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
    fontFamily: "Ubuntu-Bold",
  },
  loginTitle: {
    color: colors.mainColors.secondary,
    fontSize: 30,
    fontFamily: "Ubuntu-Bold",
  },
  registerContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  registerText: {
    color: "white",
    fontFamily: "Ubuntu-Regular",
  },
  registerPressableText: {
    color: colors.mainColors.secondary,
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
  icono: {
    color: colors.mainColors.gray2,
  },
});
