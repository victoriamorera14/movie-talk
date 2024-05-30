import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import UserCard from "../components/UserCard";
import { colors } from "../utils/colors";
import Loader from "../components/Loader";
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

  const handleSignUp = async () => {
    const { name, email, password } = userCredentials;
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: name,
        },
      },
    });
    !error ? console.log(data) : setErrorMsg(error.message);
  };

  const handleInputChange = (text, name) => {
    setUserCredentials((prev) => {
      const newCred = { ...prev, [name]: text };
      console.log(newCred);
      return newCred;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Movie Talk</Text>
      <View style={styles.mainContainer}>
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
          text={"Sign Up"}
          width={"185"}
          height={"75"}
          defaultColor={colors.mainColors.secondary}
          borderRadius={15}
          onPress={handleSignUp}
        />        
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
    gap: 75,
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
    fontSize: 30,
  },
});
